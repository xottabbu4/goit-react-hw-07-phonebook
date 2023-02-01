import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  if (!contacts) return;

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
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

