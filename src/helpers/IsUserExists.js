import { useSelector } from 'react-redux'
import { selectContacts } from '~/redux/selectors'

export const IsUserExistsByName = name => {
  const contacts = useSelector(selectContacts)
  return contacts.some(contact => {
    const contactNameToCheck = contact.name.toLowerCase()
    const inputNameToCheck = name.toLowerCase()
    return contactNameToCheck.split(' ').includes(inputNameToCheck)
  })
}

export const IsUserExistsByNumber = number => {
  const contacts = useSelector(selectContacts)
  return contacts.some(contact => contact.number === number)
}