import React from 'react';
import {AiFillGithub} from 'react-icons/all';

import rsschool from './rs_school_js.svg';


const Footer = () => (
    <div className="flex justify-between m-5">
      <a href="https://rs.school/react/">
        <img className="w-20" src={rsschool} alt="rsschool logo"/>
      </a>
      <a href="https://github.com/w1r3d7" aria-label="author github"><AiFillGithub size={30} /></a>
    </div>
);

export default Footer;
