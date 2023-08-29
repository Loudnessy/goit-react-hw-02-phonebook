import PropTypes from "prop-types";
import { FilteringByNameStyled } from "./ContactList.styled"
export const ContactList = ({contacts, filter, filtering, deleting}) => {
    const filteringByName = filtering()
    return <FilteringByNameStyled>
        {filter ? filteringByName.map(contact => {
            return <li key={contact.id}>{contact.name}: {contact.number}
            <button type="button" id={contact.id} onClick={deleting}>Delete</button>
            </li>
        }) : contacts.map(contact => {
            return <li key={contact.id}>{contact.name}: {contact.number}
             <button type="button" id={contact.id} onClick={deleting}>Delete</button>
            </li>
        })}
        
    </FilteringByNameStyled>
}
ContactList.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    filtering: PropTypes.func,
    deleting: PropTypes.func
}