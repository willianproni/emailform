// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')
const config = require('../../config.local')

export default function sendEmail(req, res) {

  let transporter = nodemailer.createTransport({
    host: 'smtp.live.com',
    port: 25,
    auth: {
      user: config.USERMAIL,
      pass: config.PASSMAIL
    }
  })

    transporter.sendMail({
    from: `"Como criar" <${config.USERMAIL}>`, // sender address
    to: config.USERMAIL, // list of receivers
    replyTo: req.body.email,
    subject: "CONTATO ATRAVÉS DO SITE FOCUS", // Subject line
    text: req.body.message, // plain text body
    html: `<b>${req.body.name}</b><br/> ${req.body.message}`, // html body
  }).then((response) => {res.send(response) })
    .catch((error) => {res.send(error)})

}
