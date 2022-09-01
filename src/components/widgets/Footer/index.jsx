import React from 'react'
import style from '../../../assets/styles/mainPage/footer.module.css'
import { useRef } from 'react'
import {FooterLinks,LanguageButton,CopyRight} from '../FooterWidgets'


const Footer = () => {

    const data = useRef(
        [
            ["Udemy Business", "Teach on Udemy", "Get the app","About us","Contact us"],
            ["Careers","Blog","Help and Support", "Affiliate","Investors"],
            ["Terms","Privacy policy","Cookie settings", "Sitemap","Accessibility statement"]
        ]
    )

  return (
    <footer className={style.footer}>
        <div className={style.footerCnt}>
            {data.current.map((element,key)=><FooterLinks data={element} key = {key} />)}
            <LanguageButton />
        </div>
        <CopyRight />
    </footer>
  )
}

export default Footer