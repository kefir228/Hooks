import './Contacts.css'

export const Contacts = ({ initialContacts }) => {
    return (
        <div className='contact__box'>
            {initialContacts.map((contact, index) => (
                <ul key={index} className="contact__list">
                    <hr style={{ border: '1px solid grey' }} />
                    <li className='contact__name'>{contact.firstName} {contact.lastName}</li>
                    <li className='contact__phone'>{contact.phone}</li>
                    <li className='contact__gender'>{contact.gender}</li>
                </ul>
            ))}
        </div>
    )
}