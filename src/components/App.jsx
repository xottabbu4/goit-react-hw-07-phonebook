import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  
    return (
      <>
        <section className={css.phonebook}>
          <div className={css.container}>
            <h1>Phone Book</h1>
          </div>
          <div className={css.container}>
            <h2>Contacts</h2>
            <ContactForm />
            <Filter />
            <ContactList/>
          </div>
        </section>
      </>
    );
  };
