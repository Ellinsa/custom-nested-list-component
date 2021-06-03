import React, { useContext } from 'react'
import ModalContext from '../context/modalContext'

const SubTemplates = ({ subTemplateitem }) => {
  const modalContext = useContext(ModalContext)
  const closeModal = modalContext.setModal
  console.log('контекст активен 2', closeModal)

  return (
    <li>
      <a href={subTemplateitem.link} onClick={() => closeModal(false)}>
        {subTemplateitem.name}
      </a>
    </li>
  )
}

export default SubTemplates
