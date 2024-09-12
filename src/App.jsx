import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactLists from './components/ContactLists';
import ProfileUsername from './components/ProfileUsername';
import SlideBar from './components/SlideBar';
import './components/styles/App.css';
import './App.css';
import ContactForm from './components/ContactForm';
import Dropbox from './components/dropbox';
import FoodForm from './components/FoodForm';
import Home from './components/Home'; // Nhập Home component của bạn

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
    console.log(data.contacts);
  };

  const onUpdate = () => {
    CloseModal();
    fetchContacts();
  };

  const CloseModal = () => {
    setIsModalOpen(false);
    setCurrentContact({});
  };

  const openmodal = () => {
    if (!isModalOpen) setIsModalOpen(true);
  };

  const openEditModal = (contact) => {
    if (isModalOpen) return;
    setCurrentContact(contact);
    setIsModalOpen(true);
  };

  return (
    <Router>
      <SlideBar contacts={contacts} />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/drop" element={<Dropbox />} />
        <Route path="/food" element={<FoodForm />} />
        <Route path="/contacts" element={<ContactLists contacts={contacts} updateContact={openEditModal} updateCallback={onUpdate} />} />
        <Route path="/user" element={<SlideBar contacts={contacts} />} />
        <Route path="/form" element={<ContactForm existingContact={currentContact} updateCallback={onUpdate} />} />
      </Routes>
    </Router>
  );
}

export default App;
