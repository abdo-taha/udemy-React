import React from 'react'
import style from '../assets/styles/mainPage/navBar.module.css'
import classNames from "classnames"

import menu from '../assets/images/menu.png'
import logo from '../assets/images/logo-udemy.svg'
import glass from '../assets/images/magnifying-glass.png'
import search from '../assets/images/search.png'
import cart from '../assets/images/shopping-cart.png'
import world from '../assets/images/world.png'


function NavLink({title,_class}) {
  return (
    <div className={ classNames(style.navItem,_class)}>
            <a href="./index.html">{title}</a>
    </div>
  )
}

// TODO  id => ref

function NavSearch(){
    return(
    <div className={style.search}>
        <form>
            <span>
                <img src={glass} alt="search"/>
            </span>
            <input autocomplete="off" id="search-input" placeholder="Search for anything" />
            <button id="search-button" type="submit">search</button>
        </form>
    </div>
    )
}

function NavBtn({title,_class}){
    return(
    <div className={classNames(style.navBtn,_class)}>
        <a href="./index.html">{title}</a>
    </div>
    )
}

function NavImg({src,_class,alt}){
    return(
    <div className={_class}>
        <a href="./index.html"><img src={src} alt={alt}/></a>
    </div>
    )
}


export default function NavBar() {
  return (
    
    <nav className={style.navBar}>

        <NavImg src={menu} alt = "menu"  _class={style.menu} />
        <NavImg src={logo} alt = "udemy"  _class={style.logo} />
        <NavLink title={"Categories"} />
        <NavSearch />
        <NavLink title={"Udemy Business"} _class = {style.business}/>
        <NavLink title ="Teach on Udemy" _class={style.teach}/>
        <NavImg src={search} alt = "search"  _class={style.searchSmall} />
        <NavImg src={cart} alt = "shopping cart"  _class={style.cart} />
        <NavBtn title={"Log in"}/>
        <NavBtn title={"Sign up"} _class = {style.blackNavBtn}/>
        <NavBtn title={<img src={world} alt="change language"/>} _class = {style.langIcon}/>
    </nav>
  )
}
