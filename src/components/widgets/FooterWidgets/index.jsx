import world from '../../../assets/images/world.png'
import logo from '../../../assets/images/logo-udemy-inverted.svg'
import style from '../../../assets/styles/mainPage/footer.module.css'
import { Link } from "react-router-dom";


const FooterLinks = ({data})=>{
    return(
        <ul>
            {
                data.map((element,key)=><li key={key}><Link to="/">{element}</Link></li>)
            }
        </ul>
    )
}
const LanguageButton = ()=>{
    return(
        <div className={style.langBtn}>
                <button><img src={world} alt =""/>English</button>
        </div>
    )
}
const CopyRight = ()=>{
    return(
        <div className={style.footerCrd}>
            <img src={logo} alt="logo"/>
            <p>© 2022 Udemy, Inc.</p>
        </div>
    )
}

export {FooterLinks,LanguageButton,CopyRight}