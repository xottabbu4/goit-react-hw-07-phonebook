import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  if (!contacts) return;
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          <p className={css.contactInfo}>{contact.name}</p>
          <p className={css.contactInfo}>{contact.phone}</p>
          <button
            className={css.contactItemButton}
            type="button"
            onClick={() => {
              const action = deleteContact(contact.id);
              dispatch(action);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

