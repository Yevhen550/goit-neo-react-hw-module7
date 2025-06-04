import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Searchbox from "./components/SearchBox/SearchBox";
import s from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <Searchbox />
      <ContactList />
    </Container>
  );
};

export default App;
