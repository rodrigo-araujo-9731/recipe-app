import React from 'react';
import style from './notice.module.css';

console.log(document.querySelector('.notice_closebtn__GDdPf'));

function displayNone() {
  const closeBtn = document.querySelector('.notice_alert__fyXuM');
  closeBtn.classList.add('close');
}

export default function Notice() {
  return (
    <div className={style.alert}>
      <span className={style.closebtn} onClick={displayNone}>
        &times;
      </span>
      <strong>Important message:</strong> This website is under contruction!
    </div>
  );
}
