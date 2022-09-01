import style from '../../../assets/styles/mainPage/mainContent.module.css'
import Courses from '../../widgets/Courses'
import PageHeader from '../../widgets/PageHeader'


const Home = () => {
  return (
    <main className={style.main}>
      <PageHeader />
      <section className={style.coursesHeader}>
            <p className={style.coursesHeaderH1}>A broad selection of courses</p>
            <p className={style.coursesHeaderMsg}>Choose from 185,000 online video courses with new additions published every month</p>
      </section>
      <Courses />
      {/* TODO categories */}
    </main>

      
  )
}

export default Home