import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

export async function GET(req, res){

    const {searchParams} = new URL(req.url);
    let ToEmail = searchParams.get('email');

    //Transporter
    let Transporter = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth:{
            user: "info@teamrabbil.com",
            pass: "~sR4[bhaC[Qs"
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    //Prepare Email

    let mailOption = {
        from: "Test Email Service <info@teamrabbil.com>",
        to: ToEmail,
        subject: "Succesfully registered",
        text: "<strong>Hi, Mr/Mrs</strong> Thanks for working with us"
    }



    try {
        await Transporter.sendMail(mailOption);
        return NextResponse.json({
            message: "Email send successfully"
        });
    }catch (e){
        return NextResponse.json({
            message: "Email failed"
        });
    }



}