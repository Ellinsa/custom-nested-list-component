import React, { useContext } from 'react'
import getListItems from '../services/list'
import Sublist from './Sublist'
import ModalContext from './../context/modalContext'

let items = getListItems()

const List = () => {
  const modalContext = useContext(ModalContext)
  let closeModal = modalContext.setModal

  return (
    <ul>
      {items.map((item, idx) => (
        <li className='items' key={idx}>
          <a href={item.link} onClick={() => closeModal(false)}>
            {item.name}
          </a>
          <ul>
            {item.templates.map((templateItem) => (
              <Sublist key={templateItem.name} templateItem={templateItem} />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default List
