import {ContactListItem} from "../ContactListItem/ContactListItem"

export const ContactList = ({ contacts }) => {
  return (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <ContactListItem
                name={name}
                number={number}
              />
          </li>
        ))}
        </ul>
  )
}