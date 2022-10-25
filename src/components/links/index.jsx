import React from 'react'
import { links } from '../../data'
import './links.css'

export const LinksComp = () => {
  return (
      <div className="links">
          {links.map((item, id) => {
              
              return (
                <a href={item.link}>
                  <button className="links__btn" id={item.id} key={item.id}>
                  
                    {item.title}
                  </button>
                </a>
              ); 
          })}
    </div>
  )
}
