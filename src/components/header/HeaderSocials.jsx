import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/bekzod-avazov-54b109269" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/AvazovBekzod" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials