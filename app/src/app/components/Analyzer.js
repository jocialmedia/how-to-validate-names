import React from "react";
import CheckLength from "./CheckLength";

function Analyzer({ firstname, lastname }) {
  return (
    <div>
      <p>The name you entered:</p>
      <table>
        <tr>
          <td>Analyzing the name you entered</td>
          <td></td>
        </tr>
        <tr>
          <td>Content</td>
          <td><b>{firstname} {lastname}</b></td>
        </tr>
        <tr>
          <td>Number of Characters</td>
          <td><CheckLength firstname={firstname} lastname={lastname} /></td>
        </tr>
      </table>
      
    </div>
  );
}

export default Analyzer;
