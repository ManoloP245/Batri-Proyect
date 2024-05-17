from email.message import EmailMessage
import smtplib

def enviarCorreoGmail(correo,claveAleatoria):

    remitente = "ramirezandres20891@gmail.com"
    destinatario = correo
    mensaje = f"Hola {correo} tu clave de recuperacion es {claveAleatoria}"

    email = EmailMessage()
    email["From"] = remitente
    email["To"] = destinatario
    email["Subject"] = "Recuperar cuenta"
    email.set_content(mensaje)

    smtp = smtplib.SMTP_SSL("smtp.gmail.com")
    smtp.login(remitente,"cwtj jyva hbhq argl")
    smtp.sendmail(remitente,destinatario,email.as_string())
    smtp.quit()