
import {BookmarkSolid, BookmarkIcon, HearthSolidIcon, HearthIcon } from '../icons';
import styles from './articleToolbar.module.scss'


const Tool = ({children, caption, count, onClick, style}) => {

    return (
        <button style={{style}} title={caption} className={styles.tool} type="button">
            <span className={styles.icon_container}>{children}</span>
            <span>{count}</span>
        </button>
    )
}

const ArticleToolbar = () => {

    

    return (
        <div className={styles.dh__toolbar}>

            <Tool caption="Likes" count="24">
                <HearthIcon className={`${styles.icon} ${styles.__like}`}/>
            </Tool>

            <Tool caption="Save" count="13">
                <BookmarkIcon className={`${styles.icon} ${styles.__save}`}/>
            </Tool>

        </div>
    )
}

export default ArticleToolbar;