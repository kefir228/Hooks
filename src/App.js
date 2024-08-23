import React, { useState } from 'react';
import './App.css';
import { Contacts } from './components/Contacts/Contacts';
import { Header } from './components/Header/Header';
import { Section } from './components/Section/Section';
import { Article } from './components/Article/Article';
import { CheckBox } from './components/CheckBox/CheckBox';
import { Footer } from './components/Footer/Footer';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const contacts = [
    {
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male"
    }, {
      firstName: "Робıн",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female"
    }, {
      firstName: "Анонıмний",
      lastName: "Анонıмус",
      phone: "+380666666666"
    }, {
      firstName: "Лıлıя",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female"
    }, {
      firstName: "Маршен",
      lastName: "Ерıксонян",
      phone: "+380739432123",
      gender: "male"
    }, {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male"
    }];

  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleSearch = (searchTerm) => {
    const filtered = contacts.filter(contact => 
        contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.includes(searchTerm)
      )
      setFilteredContacts(filtered)
  }

  return (
    <div className="App">
      <Header contents={{
        time: '19:45'
      }} />
      <Section contents={{
        list: '< Списки',
        add: '+',
        cont: 'Контакти'
      }} />
      <Article onSearch={handleSearch}/>
      <CheckBox content={contacts} setFilteredContacts={setFilteredContacts} />
      <Contacts initialContacts={filteredContacts} />
      <Footer />
    </div>
  );
}

export default App;
