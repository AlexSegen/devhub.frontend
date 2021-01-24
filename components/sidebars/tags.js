import Link from 'next/link'
import styles from './tags.module.scss';

const Tags = () => {

    return (
        <div className={styles.dh__tags}>
            <h6><strong>Popular Tags</strong></h6>
            <div className={styles.list}>
                <Link href="/">
                    <a>#Javascript</a>
                </Link>
                <Link href="/">
                    <a>#React</a>
                </Link>
                <Link href="/">
                    <a>#WebDev</a>
                </Link>
                <Link href="/">
                    <a>#DevOps</a>
                </Link>
                <Link href="/">
                    <a>#Angular</a>
                </Link>
            </div>
        </div>
    )
}

export default Tags;