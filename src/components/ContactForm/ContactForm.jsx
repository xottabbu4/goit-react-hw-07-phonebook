import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const inputChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    }
    if (event.target.name === 'phone') {
      setPhone(event.target.value);
    }
    }

    const handleSubmit = event => {
      event.preventDefault();
      const contact = {
      name,
      phone
    };
    const isAtList = contacts.find(contact => contact.name === name);
    if (isAtList) {
      alert('Already in list');
      return;
    }
    dispatch(addContact(contact));
      event.target.reset();
    };

    return (
      <>
        <div>
          <form className={css.form} onSubmit={handleSubmit}>
            <p className={css.formText}>Name</p>
            <input
              className={css.formInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={inputChange}
              value={name}
            />
            <p className={css.formText}>Number</p>
            <input
              className={css.formInput}
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={inputChange}
              value={number}
            />
            <button className={css.formButton} type="submit">Add contact
            </button>
          </form>
        </div>
      </>
    );
  }