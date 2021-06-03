import React from 'react'
import Templates from './Templates'

const Sublist = ({ templateItem }) => {
  let [isIcon, setIcon] = React.useState(false)
  return (
    <>
      <li>
        <a href={templateItem.link}>
          {templateItem.name}{' '}
          {isIcon ? (
            <span className='icon' onClick={() => setIcon(false)}>
              &#10006;
            </span>
          ) : (
            <span className='icon' onClick={() => setIcon(true)}>
              &#10010;
            </span>
          )}
        </a>
      </li>
      <ul>
        {isIcon &&
          templateItem.items.map((item) => {
            return <Templates key={item.name} item={item} />
          })}
      </ul>
    </>
  )
}

export default Sublist
