import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
    host: `smtp.gmail.com`,
    service: 'gmail',
    secureConnection: false,
    port: 587,
    tls: {
        rejectUnauthorized: false,
    },
    // secure: false, // true for 465, false for other ports
    auth: {
        user: 'unviajecitoteam@gmail.com', // generated ethereal user
        pass: 'igckelzxqdvfbrgk', // generated ethereal password
    },
});

export const sendEmail = async (email, subject, html) => {
    try {

        await transporter.sendMail({
            from: `UNviajecito Team <${process.env.EMAIL_USER}>`, // sender address
            to: email, // list of receivers
            subject, // Subject line
            text: 'Wellcome To UNviajecito', // plain text body
            html, // html body
        });

    } catch (error) {
        console.log('Algo no va bien con el email', error);
    }
}

export const getTemplate = (name, token) => {
    return `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <div id="email___content">
            <img src="https://st4.depositphotos.com/6900204/25643/v/450/depositphotos_256436252-stock-illustration-carpool-service-illustration-cartoon-character.jpg" alt="" />
            <h2>${name} Bienvenido al Team UNviajecito</h2>
            <br />
            <p>Gracias por registrarte con nosotros</p>
            <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
            <br />
            <a
                href="http://localhost:4000/confirm/${token}"
                target="_parent"
            >Confirmar Cuenta</a>
        </div>
      `;
}