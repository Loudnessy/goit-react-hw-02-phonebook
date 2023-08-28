export const ContactList = ({contacts, filter, filtering, deleting}) => {
    const filteringByName = filtering()
    return <ul>
        <p>Find contacts by name</p>
        {filter ? filteringByName.map(contact => {
            return <li key={contact.id}>{contact.name}: {contact.number}
            <button type="button" id={contact.id} onClick={deleting}>Delete</button>
            </li>
        }) : contacts.map(contact => {
            return <li key={contact.id}>{contact.name}: {contact.number}
             <button type="button" id={contact.id} onClick={deleting}>Delete</button>
            </li>
        })}
        
    </ul>
}