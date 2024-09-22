import "./contact.css"

export default function Contact() {
  return (<>
    <h2>Escribanos su consulta</h2>
    <div className="contact_container">    
     <form className="contact_form">
        <div className="input_container">
            <label htmlFor="fullname">Nombre y Apellido </label>
            <input type="text" name="fullname" id="fullname" required minLength="6" maxLength="50" />
        </div>
        <div className="input_container">
            <label htmlFor="email">Correo electronico</label>
            <input type="email" name="email" id="email" required placeholder="nombre@misitio.com" minLength="10" maxLength="50" pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$" />
        </div>
        <div className="input_container">
            <label htmlFor="phone">Numero de telefono</label>
            <input type="tel" name="phone" id="phone" minLength="10" maxLength="15"/>
        </div>
        <div className="input_container">
            <label htmlFor="textarea">Dejanos tu consulta</label>
            <textarea name="textarea" id="textarea" rows={5}></textarea>
        </div>
        <div className="input_container">
            <button className="contact_btn" type="submit">Enviar</button>
        </div>
     </form>
        <div className="contact_map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113262.71073901864!2d-58.874789589489126!3d-27.486075093428386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456b79d5bed36b%3A0xfa999f1ef3b40646!2sCorrientes!5e0!3m2!1ses-419!2sar!4v1715543100971!5m2!1ses-419!2sar"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    </div> </>)}
