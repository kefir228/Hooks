import React, { useState, useEffect } from 'react';
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
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female"
    }, {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666"
    }, {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female"
    }, {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male"
    }, {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male"
    }];

  const [filters, setFilters] = useState({
    searchTerm: '',
    male: false,
    female: false,
    unknown: false
  })

  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const filterContacts = (filters) => {
    const filtered = contacts.filter(contact => {
      const matchesGender =
        (filters.male && contact.gender === 'male') ||
        (filters.female && contact.gender === 'female') ||
        (filters.unknown && !contact.gender) ||
        (!filters.male && !filters.female && !filters.unknown);

      const matchesTerm =
        contact.firstName.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        contact.phone.includes(filters.searchTerm);

      return matchesGender && matchesTerm;
    });

    setFilteredContacts(filtered);
  };

  useEffect(() => {
    filterContacts(filters);
  }, [filters]);

  const handleSearch = (value) => {
    setFilters(prev => ({ ...prev, searchTerm: value }));
  };

  const handleGenderChange = (gender, value) => {
    setFilters(prev => ({ ...prev, [gender]: value }));
  };

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
      <Article onSearch={handleSearch} />
      <CheckBox onGenderChange={handleGenderChange} />
      <Contacts initialContacts={filteredContacts} />
      <Footer />
    </div>
  );
}

export default App;
