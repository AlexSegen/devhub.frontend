import Link from 'next/link'
import { useContext, useState, useEffect } from "react";
import { BellSolidIcon } from '../icons';
import { AuthContext } from '../../context/authContext';

import style from "./header.module.scss";

const Header = () => {

    const { Logout, user, isAuthenticated } = useContext(AuthContext);

    const [dropdown, setDropdown] = useState(false);
    const [notificationsCount, setNotificationsCount] = useState(0);

    const SignOut  = async () => {
        Logout()
    }

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
                        !isAuthenticated && (<nav>
                                        <Link href="/login">
                                            <a>Log in</a>
                                        </Link>

                                        <Link href="/create-account">
                                            <a className={style.cta}>Create Account</a>
                                        </Link>
                                    </nav>)
                    }

                    {
                        isAuthenticated && user && (<nav>
                                        <Link href="/new-post">
                                            <a className={style.cta}>Write a post</a>
                                        </Link>
                                        
                                        <a><BellSolidIcon/> ({notificationsCount})</a>

                                        <div className={style.user}>
                                            <img onClick={ () => setDropdown(!dropdown)}
                                            className={`${style.avatar} ${dropdown ? style.__isOpen : ""}`}
                                            src={user.avatar} alt={`${user.first_name} ${user.last_name}`}/>

                                            {
                                                dropdown && (

                                                    <div className={style.dropdown}>
                                                        <div className={style.name}>{`${user.first_name} ${user.last_name}`}</div>
                                                        <div className={style.email}>{user.email}</div>
                                                        <hr/>
                                                        <nav className={style.nav}>
                                                            <Link href="/new-post"><a className={style.nav_item} >Write a Post</a></Link>
                                                            <Link href="/new-post"><a className={style.nav_item}>Reading List</a></Link>
                                                            <Link href="/profile"><a className={style.nav_item}>Profile</a></Link>
                                                        </nav>
                                                        <hr/>
                                                        <nav className={style.nav}>
                                                            <button onClick={SignOut} type="button" className={style.nav_item} >Sign Out</button>
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