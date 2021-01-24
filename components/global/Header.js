import style from "./header.module.scss";
import Link from 'next/link'
import { useState } from "react";

const Header = () => {

    const isAuth = true;

    const [dropdown, setDropdown] = useState(false);

/*     const toggleDropdown = () => {

    } */

    return (
        <header className={style.dh__header}>
            <div className={style.dh__header_container}>
                <div className={style.dh__header_brand}>
                    <Link href="/">
                        <a><img src="/img/logo.png" alt=""/></a>
                    </Link>
                </div>
                <div className={style.dh__header_navigation}>
                    {
                        !isAuth && (<nav>
                                        <Link href="/login">
                                            <a>Log in</a>
                                        </Link>

                                        <Link href="/create-account">
                                            <a className={style.cta}>Create Account</a>
                                        </Link>
                                    </nav>)
                    }

                    {
                        isAuth && (<nav>
                                        <Link href="/new-post">
                                            <a className={style.cta}>Write a post</a>
                                        </Link>

                                        <div className={style.user}>
                                            <img onClick={ () => setDropdown(!dropdown)} className={`${style.avatar} ${dropdown ? style.__isOpen : ""}`} src="http://placehold.it/100x100" alt=""/>

                                            {
                                                dropdown && (

                                                    <div className={style.dropdown}>
                                                        <div className={style.name}>Alejandro Vivas</div>
                                                        <div className={style.email}>ajvivas86@gmail.com</div>
                                                        <hr/>
                                                        <nav className={style.nav}>
                                                            <Link href="/new-post"><a className={style.nav_item} >Write a Post</a></Link>
                                                            <Link href="/new-post"><a className={style.nav_item}>Reading List</a></Link>
                                                            <Link href="/new-post"><a className={style.nav_item}>Settings</a></Link>
                                                        </nav>
                                                        <hr/>
                                                        <nav className={style.nav}>
                                                            <button type="button" className={style.nav_item} >Sign Out</button>
                                                        </nav>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </nav>)
                    }
                    
                </div>
            </div>
        </header>
    )
}

export default Header;