import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
export class App extends Component {
    state = {
        contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
        filter: '',
      }


onSubmitContact = evt => {
    evt.preventDefault()
    const {contacts} = this.state
    if (contacts.find(contact => contact.name === evt.target.name.value)) {
        return alert(`${evt.target.name.value} is already in contacts`);
    }
    this.setState(prevState => { 
const newObj = {id: nanoid(), name: evt.target.name.value, number: evt.target.querySelector('input[type="tel"]').value}
return {contacts:[...prevState.contacts, newObj]}   
    })
}
onChangeInput = evt => {
    this.setState(prevState => {
        return {filter: evt.target.value}
    })
}
filterByName = () => {
    const {contacts, filter} = this.state
    return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()))
}
deletingContact = evt => {
    const {contacts} = this.state
    const newObj = contacts.filter(contact => contact.id !== evt.currentTarget.id)
    console.log(newObj);
    this.setState(prevState => {
     return {contacts:[...newObj]}
    })
}



  render() {
    const {contacts, filter} = this.state
    return <div>
        <h1>Phonebook</h1>
        <ContactForm formSubmit={this.onSubmitContact}/>
        <h2>Contacts</h2>
        <Filter input={this.onChangeInput}/>
<ContactList contacts={contacts} filter={filter} filtering={this.filterByName} deleting={this.deletingContact}/>
    </div>
  }
};
