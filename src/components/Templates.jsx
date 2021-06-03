import React from 'react'
import SubTemplates from './subTemplates'

const Templates = ({ item }) => {
  let [isIcon, setIcon] = React.useState(false)
  console.log(item)
  return (
    <>
      <li>
        <a href={item.link}>{item.name}</a>
        {item && isIcon ? (
          <span className='icon' onClick={() => setIcon(false)}>
            &#10006;
          </span>
        ) : (
          <span className='icon' onClick={() => setIcon(true)}>
            &#10010;
          </span>
        )}
      </li>
      <ul>
        {isIcon &&
          item.templates.map((subTemplateItem) => {
            return (
              <SubTemplates
                key={subTemplateItem.name}
                subTemplateitem={subTemplateItem}
              />
            )
          })}
      </ul>
    </>
  )
}

export default Templates
