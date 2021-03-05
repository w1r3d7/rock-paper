import React from 'react';
import {AiFillGithub} from 'react-icons/all';

import rsschool from './rs_school_js.svg';


const Footer = () => (
    <div className="flex justify-between m-5">
      <a className="transition duration-500 transform hover:-rotate-12" href="https://rs.school/react/">
        <img className="w-20" src={rsschool} alt="rs school logo"/>
        <span>2021</span>
      </a>

      <a className="transition duration-500 transform hover:rotate-12" href="https://github.com/w1r3d7" aria-label="author github"><AiFillGithub size={30} /></a>
    </div>
);

export default Footer;
