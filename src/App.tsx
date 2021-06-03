import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import List from './components/List.jsx';
import ModalContext from './context/modalContext';


// интерфейс для пропсов
interface ModalProps {
  visible: boolean
  title: string
  content: ReactElement | string
  footer: ReactElement | string
  onClose: () => void
}

const Modal = ({
                 visible = false,
                 title = '',
                 content = '',
                 footer = '',
                 onClose,
             }: ModalProps) => {

  // создаем обработчик нажатия клавиши Esc
  const onKeydown = ({key}: KeyboardEvent) => {
      switch (key) {
          case 'Escape':
              onClose()
              break
      }
  }

  // c помощью useEffect цепляем обработчик к нажатию клавиш
  // https://ru.reactjs.org/docs/hooks-effect.html
  React.useEffect(() => {
      document.addEventListener('keydown', onKeydown)
      return () => document.removeEventListener('keydown', onKeydown)
  })


  // если компонент невидим, то не отображаем его
  if (!visible) return null;

  // или возвращаем верстку модального окна
  return <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
              <h3 className="modal-title">{title}</h3>
              <span className="modal-close" onClick={onClose}>
          &times;
        </span>
          </div>
          <div className="modal-body">
              <div className="modal-content">{content}</div>
          </div>
          {footer && <div className="modal-footer">{footer}</div>}
      </div>
  </div>
}

const App = () => {
  const [isModal, setModal] = React.useState(false)
  const onClose = () => setModal(false)
  return (
      <React.Fragment>
      <ModalContext.Provider
          value={{
            isModal,
            setModal
          }}
        >
          <button onClick={() => setModal(true)} onTouchStart={() => setModal(true)}>Button</button>
          <Modal
              visible={isModal}
              title="Заголовок"
              content={
                  <List></List>
              }
              footer={<button onClick={onClose} onTouchEnd={onClose}>Закрыть</button>}
              onClose={onClose}
          />
          </ModalContext.Provider>
      </React.Fragment>
  );
};

ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;