import {DeleteButton, Text} from './ContactListItem.styled'

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <Text>{name} - {number}</Text>
      <DeleteButton type="button" onClick={() => deleteContact(id)}>
        Delete Contact
      </DeleteButton>
    </>
  )
}