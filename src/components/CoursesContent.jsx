import style from "../assets/styles/mainPage/coursesContent.module.css"

export default function CoursesContent({header,description,category,children}){


    return (
        <div className={style.coursesContent}>
                <div className={style.coursesContentHead}>
                    <h2>{header}</h2>
                    <p>{description}</p>
                    <a className={style.gnrlBtn} href="./index.html">Explore {category}</a>
                </div>
                <div className={style.coursesList}>
                    {children}
                </div>
            </div>
    )
}