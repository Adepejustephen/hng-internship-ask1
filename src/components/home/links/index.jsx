import React from 'react'
import { Link } from 'react-router-dom';
import { Github, Slack } from '../../../assets';
import { links } from '../../../data'
import './links.css'

export const LinksComp = () => {
  return (
    <section className="links">
      <div className="links__list">
        {links.map((item) => {
          return (
            <a href={item.link} target="blank" id={item.id} key={item.id}>
              <button className="links__btn">{item.title}</button>
            </a>
          );
        })}
        <Link to="contact" id="contact">
          <button className="links__btn">Contact</button>
        </Link>
      </div>
      <div className="links__socials">
        <img src={Slack} alt="slack-icon" />
        <img src={Github} alt="github-icon" />
      </div>
    </section>
  );
}
