import style from "../assets/styles/mainPage/coursesContent.module.css"


function Head({data}) {
  let {header,description,category} = data;
  return (
    <div className={style.coursesContentHead}>
        <h2>{header}</h2>
        <p>{description}</p>
        <a className={style.gnrlBtn} href="./index.html">Explore {category}</a>
    </div>
  )
}


export default function CoursesContent({children,...rest}){


    return (
        <div className={style.coursesContent}>
            <Head  data = {rest} />
            <div className={style.coursesList}>
                {children}
            </div>
        </div>
    )
}