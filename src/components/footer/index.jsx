import React from 'react'
import { I4G, Zuri } from '../../assets'
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={Zuri} alt="zuri-logo" />
      <span>HNG Internship 9 Frontend Task</span>
      <img src={I4G} alt="I4G-logo" />
    </footer>
  );
}
