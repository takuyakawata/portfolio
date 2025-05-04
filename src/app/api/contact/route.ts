// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: "必須フィールドが不足しています" }, { status: 400 });
    }

    // Gmail SMTP 設定
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.CONTACT_RECEIVER,
            subject: `[Portfolio Contact] ${subject}`,
            text: message,
            // HTML を送りたい場合は html プロパティを追加
        });
        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("メール送信エラー:", err);
        return NextResponse.json({ error: "メール送信に失敗しました" }, { status: 500 });
    }
}
