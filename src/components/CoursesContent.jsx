import "../assets/styles/mainPage/coursesContent.css"

export default function CoursesContent({header,description,category,children}){


    return (
        <div className="courses-content">
                <div className="courses-content-head">
                    <h2>{header}</h2>
                    <p>{description}</p>
                    <a className="gnrl-btn" href="./index.html">Explore {category}</a>
                </div>
                <div className="courses-list">
                    {children}
                </div>
            </div>
    )
}