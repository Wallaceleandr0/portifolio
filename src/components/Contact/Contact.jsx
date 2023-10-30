import './Contact.css'
import { useState, useEffect } from 'react'

function Contact() {

    const [ listContact, setListContact ] = useState([])

    useEffect(() => {
        fetch("./contact.json")
        .then((response) => response.json())
        .then((data) => setListContact(data))
        .catch((error) => console.log(`Deu ruim :( ${error}`))
    },[])

  return (
    <section className="Contact" id='contact'>
        <h2>Contatos</h2>
        <div className="Contact-list">
            {listContact.map((item) => (
                <div>
                <a href={item.url} target='_blank'><img src={item.img} /></a>
                <p>{item.title}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Contact