import React from "react";
import Link from "next/link";

function Header() {
    return (
      <div>
        <h1>name-validation.com</h1>
        <ul>
        <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
      </div>
    )
  }
   
export default Header