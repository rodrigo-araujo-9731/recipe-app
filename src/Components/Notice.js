import React from 'react';
import style from './notice.module.css';

function displayNone() {
    const closeBtn = document.querySelector('#closebtn');
    closeBtn.classList.add('close')
}

export default function Notice() {
  return (
    <div className={style.alert}>
      <span
          className={style.closebtn}
          onClick={this.displayNone}
        >
          &times;
        </span>
        <strong>Important message:</strong> This website is under contruction!
    </div>
  );
}