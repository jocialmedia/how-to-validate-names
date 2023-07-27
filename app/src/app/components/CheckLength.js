import React from "react";

function CheckLength({firstname, lastname}) {

    const string = firstname.toString().trim() + lastname.toString().trim() 
    console.log(string)
    const string_length = string.length
    console.log(string_length)
  return (
    <div>
      <p>{string_length} </p>
    </div>
  );
}

export default CheckLength