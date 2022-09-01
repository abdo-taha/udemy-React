import React from 'react'
import style from '../../../assets/styles/mainPage/navBar.module.css'
import {NavLink,NavSearch,NavBtn,NavImg} from '../NavBarWidgets'

import menu from '../../../assets/images/menu.png'
import logo from '../../../assets/images/logo-udemy.svg'
import search from '../../../assets/images/search.png'
import cart from '../../../assets/images/shopping-cart.png'
import world from '../../../assets/images/world.png'


 const NavBar = () =>{
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

export default NavBar