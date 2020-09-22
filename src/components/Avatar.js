import React from 'react';
import Person from './Name';
import imgPath from '../assets/avatar.jpg';
import '../styles/avatar.css';

function Avatar() {
  const name = new Person('KAMIL', 24);
  return (
    <div className="header">
      <img src={imgPath} alt="" className="img-circle" />
      <h1>
        HELLO,
        <br />
        {name.introduce().toUpperCase()}
      </h1>
    </div>
  );
}

export { Avatar };
