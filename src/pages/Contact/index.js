import { useState } from 'react';
import './styles.css';
import emailjs from '@emailjs/browser'

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    function handleSendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || subject === '' || content === ''){
            alert('Preencha todos os campos');
            return;
        }

        const templateParans={
            from_name: name,
            email: email,
            subject: subject,
            message: content
        }

        const templeteID = 'SuaChaveId';
        const serviceId = 'SeuIdServiço'

        emailjs.send("service_a5uspp1", templeteID, templateParans , serviceId )
        .then((response) => {
                console.log("Email Enviado", response.status, response.text)
                setName('')
                setEmail('')
                setSubject('')
                setContent('');
            },(err) =>{
                console.log("Erro", err)
            }
        )
    }

    return (
        <div id='contact' className="container_contact">
            <div className='container_form_contact'>
                <h2>Entre em contato</h2>
                
                <form className='contact_form' onSubmit={handleSendEmail}>
                    <input type="text" 
                    placeholder="Seu nome *"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}/>

                    <input type="email" 
                    placeholder="Seu email *"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>

                    <input type="text" 
                    placeholder="escreva um assunto *"
                    name="subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}/>
                    <textarea type="text" 
                    placeholder="escreva um assunto *"
                    name="message"
                    value={content}
                    onChange={e => setContent(e.target.value)}/>
                    <button className='button' type="submit">Enviar</button>
                </form>
            </div>
            <div className='thumbnail_form'>

            </div>
        </div>
    );
}

export default Contact;