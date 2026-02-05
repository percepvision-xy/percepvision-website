// app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const RESEND = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { fullname , company, phone, email, industry, message } = body

        const data = await RESEND.emails.send({
            from: 'Percepvision Website <noreply@percepvision.com>',
            to: ['info@percepvision.com'],
            replyTo: email,
            subject: `New Demo Request: ${fullname} from ${company}`,
            html: `
                <h2>New Demo Request</h2>
                <p><strong>Name:</strong> ${fullname}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Industry:</strong> ${industry}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        })

        return NextResponse.json({ success: true, data})

    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}
