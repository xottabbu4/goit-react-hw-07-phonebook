import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
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
            {(isLoading && !error && (
          <>
            <br />
            <b>Request in progress...</b>
          </>
        )) || <ContactList />}
          </div>
        </section>
      </>
    );
  };
