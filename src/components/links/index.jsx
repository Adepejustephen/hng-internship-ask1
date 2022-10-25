import React from 'react'
import { Github, Slack } from '../../assets';
import { links } from '../../data'
import './links.css'

export const LinksComp = () => {
  return (
    <div className="links">
      <div className="links__list">
        {links.map((item, id) => {
          return (
            <a href={item.link} target="blank" id={item.id} key={item.id}>
              <button className="links__btn">{item.title}</button>
            </a>
          );
        })}
          </div>
          <div className="links__socials">
              <img src={Slack} alt="slack-icon" />
              <img src={Github} alt="github-icon" />
          </div>
    </div>
  );
}
