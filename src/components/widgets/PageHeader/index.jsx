import React from 'react'
import header from '../../../assets/images/header.jpg'
import style from '../../../assets/styles/mainPage/pageHeader.module.css'


const PageHeader = ()=>{
  return (
    <header className={style.header}>
    <div className={style.headerImg}>
        <img src={header} alt="new to udemy" />
    </div>
    <div className={style.headerBox}>
        <h1>New to Udemy? Lucky you.</h1>
        <p>Courses start at E£169.99. Get your new-student offer before it expires.</p>
    </div>

    </header>
  )
}

export default PageHeader