import { useState } from 'react';
import './Button.css';
export default function Button({ type = "primary", children, onClick }) {
  useState();
  
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
}
