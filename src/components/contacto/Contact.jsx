import "./contact.css"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from "react";
import useIntersection from "../../hooks/useIntersection";

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [active, setActive] = useState(false)
    const inputNull = { name: "", phone: "", email: "", company: "" };
    const [ elementRef, isIntersecting ] = useIntersection({ threshold: 0.4, });

    const sendEmail = data => {
        setActive(true)
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/memo2705@gmail.com', {
            name: `Nuevo mensaje de ${data.name}`,
            message: `${data.name}, de la empresa ${data.company} desea ponerse en contacto contigo. L@ puedes contactar este correo ${data.email} o a su numero telefónico ${data.phone}.`
        })
            .then(res => {
                reset(inputNull)
                setActive(false)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Email sent success',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error while sending your email.',
                    showConfirmButton: false,
                    timer: 1500
                  })  
            });
    }
    return (
        <div id="contacto" className="contacto">
            <h2 ref={elementRef} className={ isIntersecting ? "contact__title show" : "contact__title hidden"}   id="contact">Contactame 😁</h2>
            <div ref={elementRef} className={ isIntersecting ? "formulario show" : "formulario hidden" } >
                <p className="contact__subtitle">Estare muy feliz de responder lo mas pronto posible!</p>
                <form onSubmit={handleSubmit(sendEmail)}
                className='form_container'>
                    <i className={ active ? 'sending email bx bx-mail-send bx-fade-right bx-lg' : 'email bx bx-mail-send bx-lg'}></i>
                    <div className="names_container">
                        <div className="input_container">
                            <label className="label" htmlFor="name">Nombre y Apellidos:</label>
                            <input type="text" id='name' placeholder="Tu nombre completo:"  {...register('name')} required />
                        </div>
                    </div>
                    <div className="input_container">
                        <label className="label" htmlFor="email">Email:</label>
                        <input type="email" id='email' placeholder="Tu email:"{...register('email')} required />
                    </div>
                    <div className="input_container">
                        <label className="label" htmlFor="phone">Celular (favor de incluir el codigo de su país)</label>
                        <input type="text" id='phone' placeholder="Ejemplo: +526697321122" {...register('phone')} required />
                    </div>
                    <div className="input_container">
                        <label className="label" htmlFor="company">Compañia o institucion: </label>
                        <input type="text" id='company' placeholder="Nombre de su compañía o institucion" {...register('company')} required />
                    </div>
                    <button className='submit_btn'>
                        Enviar
                    </button>
                    <hr />
                    <p>Muchas gracias por su visita y por contactarme !</p>
                    <p>Será un privilegio formar parte de su equipo!</p>
                </form>
            </div>
        </div>
    );
};

export default Contact;