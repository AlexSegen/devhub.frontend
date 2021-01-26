import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import RightSidebar from './RightSidebar';
import LeftSidebar from './LeftSidebar';

import styles from './layout.module.scss'

const Layout = ({title, description, location, grid, children}) => {

    const gridTemplate = template => {
        switch (template) {
            case "wide":
                return styles.__wide
            case "home":
                return styles.__home
            case "article":
                return styles.__article
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
                <LeftSidebar location={location}/>
                
                <div>
                    {children}
                </div>
                
                <RightSidebar location={location}/>
            </div>
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;