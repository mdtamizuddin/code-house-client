import React from 'react'

const Nodemailer = () => {
    const code = `
    const sendEmail = (senderData) => {
        async function main() {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'example@gmail.com',
              pass: process.env.NODEMAILER_PASS,
            },
          });
          // send mail with defined transport object
          const info = await transporter.sendMail({
            from: 'example@gmail.com',
            to: senderData.email,
            subject: "Your Subject",
            text: "Some text ",
            html: 
                </div>
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                  <h4 style="color: rgb(0, 1, 65);">Hello Sender</h4>
                  <p>Thank you for requesting an appointment !!</p>
                  <p>Put Your Any Message Here</p>
                </div>
                ,
          });
      
          console.log("Message sent: %s", info.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }
      
        main().catch(console.error);
    `
    return (
        <div>
            <h1 className="text-center text-4xl py-5 font-bold">Nodemailer</h1>
            <h1 className="text-center text-3xl py-2 font-bold">Send Mail With Google Less Secure App</h1>

            <div className="mockup-code">
            <h1 className='text-center text-2xl'>Installetion</h1>
              <pre data-prefix='$'>
            <code className='text-green-500 '>npm install nodemailer</code>
              </pre>
              <h1 className='text-center text-2xl'>Code</h1>
            <pre data-prefix="##">
                <code className='text-green-500'>
                 
                    {
                        code
                    }
                </code>
            </pre>
            </div>
        </div>
    )
}

export default Nodemailer