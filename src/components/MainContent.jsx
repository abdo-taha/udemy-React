import React from 'react'
import PageHeader from './PageHeader'
import style from '../assets/styles/mainPage/mainContent.module.css'
import Courses from './Courses'

function MainContent() {
    
  return (
    <main className={style.main}>
      <PageHeader />
      <section className={style.coursesHeader}>
            <p className={style.coursesHeaderH1}>A broad selection of courses</p>
            <p class={style.coursesHeaderMsg}>Choose from 185,000 online video courses with new additions published every month</p>
      </section>

      <Courses />
    </main>
  )
}

export default MainContent