import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import styles from './layout.module.scss'

const Layout = ({title, description, location, grid, children}) => {

    const gridTemplate = template => {
        switch (template) {
            case "wide":
                return styles.__wide
            case "home":
                return styles.__home
            case "auth":
                return styles.__auth
            case "post":
                return styles.__post
        
            default:
                return styles.__home
        }
    }

    return ( 
        <>
        <Head>
            <title>{ title ? title + " - DevHub Community" : "DevHub Community" }</title>
            <meta name = "description" content={ description || "DevHub Community" } />
        </Head>

        <Header/>
        
        <main className="container">
            <div className={styles.dh__grid + " " + gridTemplate(grid)}>
                <div>
                    { location === "home" && <Sidebar/> }
                </div>
                <div>
                    {children}
                </div>
                <div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;