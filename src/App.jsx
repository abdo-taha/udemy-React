import './assets/styles/App.css';
import CourseItem from './components/CourseItem';
import CoursesContent from './components/CoursesContent';
import data from "./db.json"

function App() {
  
  let {header,description,category} = data
  
  return (
    <div style={{padding : '1rem 11.4rem '}}> 
    <CoursesContent  header = {header} description = {description} category = {category} >
        {data.courses.map(course=><CourseItem  course = {course} key = {course.id}/>)}    
    </CoursesContent>
    </div>
  );
}

export default App;
