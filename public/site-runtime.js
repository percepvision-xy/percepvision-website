(function () {
  function valueOf(id) {
    const el = document.getElementById(id)
    return el && "value" in el ? String(el.value).trim() : ""
  }

  function setBusy(form, busy) {
    const button = form.querySelector('button[type="submit"]')
    if (!button) return
    if (!button.dataset.originalText) {
      button.dataset.originalText = button.textContent || "Request Demo"
    }
    button.disabled = busy
    button.textContent = busy ? "Sending..." : button.dataset.originalText
  }

  function showStatus(form, message, ok) {
    let status = form.querySelector("[data-form-status]")
    if (!status) {
      status = document.createElement("p")
      status.dataset.formStatus = "true"
      status.className = "col-span-2 text-sm text-center mt-2"
      form.appendChild(status)
    }
    status.textContent = message
    status.style.color = ok ? "#047857" : "#dc2626"
  }

  document.querySelectorAll("[data-collapse-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      const target = document.getElementById(button.getAttribute("data-collapse-toggle") || "")
      if (!target) return
      target.classList.toggle("hidden")
      const expanded = button.getAttribute("aria-expanded") === "true"
      button.setAttribute("aria-expanded", expanded ? "false" : "true")
    })
  })

  document.querySelectorAll("form").forEach(function (form) {
    if (!form.querySelector("#fullname") && !form.querySelector("#email")) return

    form.addEventListener("submit", async function (event) {
      event.preventDefault()

      const payload = {
        fullname: valueOf("fullname"),
        company: valueOf("company"),
        phone: valueOf("phone"),
        email: valueOf("email"),
        industry: valueOf("industry"),
        message: valueOf("message") || valueOf("needs"),
      }

      if (!payload.fullname || !payload.company || !payload.email || !payload.industry) {
        showStatus(form, "Please complete the required fields.", false)
        return
      }

      setBusy(form, true)
      showStatus(form, "", true)

      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })

        if (!response.ok) throw new Error("Failed to send")

        if (typeof gtag === "function") {
          gtag("event", "demo_form_submitted")
        }

        form.reset()
        showStatus(form, "Thank you. The Percepvision team will contact you shortly.", true)
      } catch (error) {
        showStatus(form, "Something went wrong. Please email info@percepvision.com.", false)
      } finally {
        setBusy(form, false)
      }
    })
  })
})()
