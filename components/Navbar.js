import React from 'react';
import Link from 'next/link';
import '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className='menu'>
      
      <ul>
        <li>
          <a href='http://'>Home</a>
        </li>
        <li>
          <a className='dropdown-arrow' href='http://'>
            Products
          </a>
          <ul className='sub-menus'>
            <li>
              <a href='http://'>Products Sub Menu 1</a>
            </li>
            <li>
              <a href='http://'>Products Sub Menu 2</a>
            </li>
            <li>
              <a href='http://'>Products Sub Menu 3</a>
            </li>
            <li>
              <a href='http://'>Products Sub Menu 4</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='http://'>About</a>
        </li>
        <li>
          <a className='dropdown-arrow' href='http://'>
            Services
          </a>
          <ul className='sub-menus'>
            <li>
              <a href='http://'>Services Sub Menu 1</a>
            </li>
            <li>
              <a href='http://'>Services Sub Menu 2</a>
            </li>
            <li>
              <a href='http://'>Services Sub Menu 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='http://'>Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
