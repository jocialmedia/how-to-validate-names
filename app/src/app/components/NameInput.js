'use client'

import React, { useState } from 'react';
import Analyzer from './Analyzer';

function NameInput() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const FirstNameHandler = event => {
    setFirstname(event.target.value);
  };

  const LastNameHandler = event => {
    setLastname(event.target.value);
  };
  
  return (
    <div>
      <input
      type="text"
      name="Firstname"
      onChange={FirstNameHandler}
      value={firstname}
      placeholder="First Part"
    />
    <input
      type="text"
      name="Lastname"
      onChange={LastNameHandler}
      value={lastname}
      placeholder="Second Part"
    />

    <Analyzer firstname={firstname} lastname={lastname} />
    </div>
  );
}

export default NameInput