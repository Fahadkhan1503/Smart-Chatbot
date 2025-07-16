import { createTransport } from "nodemailer"

const sendmail = async (email, subject, otp) => {
    const transport = createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.Gmail,
            pass: process.env.Password
        }
    })
}