import style from '../../../assets/styles/mainPage/navBar.module.css'
import classNames from "classnames"
import glass from '../../../assets/images/magnifying-glass.png'
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useState } from 'react';

const NavLink = ({title,_class}) =>{
    return (
      <div className={ classNames(style.navItem,_class)}>
              <Link to="/">{title}</Link>
      </div>
    )
  }
  
  // TODO  id => ref
  
  const NavSearch = ()=>{
    const [searchParams, setSearchParams] = useSearchParams({"search":""});
    const [search, setSearch] = useState("");
    return(
    <div className={style.search}>
        <form>
            <span>
                <img src={glass} alt="search"/>
            </span>
            <input 
                autoComplete="off"
                id="search-input"
                placeholder="Search for anything" 
                value={search} 
                onChange ={e=>setSearch(e.target.value)}
            />
            <button id="search-button" onClick={e=>{ e.preventDefault(); setSearchParams({"search":search})}}  >search</button>
        </form>
    </div>
    )
  }
  
  const NavBtn = ({title,_class})=>{
      return(
      <div className={classNames(style.navBtn,_class)}>
          <Link to="/">{title}</Link>
      </div>
      )
  }
  
  const NavImg = ({src,_class,alt})=>{
      return(
      <div className={_class}>
          <Link to="/"><img src={src} alt={alt}/></Link>
      </div>
      )
  }

  export {NavLink,NavSearch,NavBtn,NavImg}