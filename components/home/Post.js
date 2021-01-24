import Link from 'next/link'
import styles from './post.module.scss'
import { formatDate } from '../../helpers/utils';

const Post = ({post, index}) => {
    return (
        <div className={styles.dh__post}>
            

            {
                index === 0 && <Link href="/">
                                    <a className={styles.cover}>
                                        <img src={post.cover} alt={post.title}/>
                                    </a>
                                </Link>
            }

            <div className={styles.content}>

                <div className={styles.author}>
                    <Link href="/">
                        <a className={styles.avatar}>
                            <img src={post.avatar} alt={`${post.first_name} ${post.last_name}`}/>
                        </a>
                    </Link>
                    <div className={styles.info}>
                        <Link href="/">
                            <a className={styles.name}>{post.first_name} {post.last_name}</a>
                        </Link>
                        <div className={styles.date}>
                            {formatDate(post.createdAt, "MMM Do YY")}
                        </div>
                    </div>
                </div>

                <h2 className={styles.title}>
                    <Link href="/">
                    <a>{post.title}</a>
                    </Link>
                </h2>

                <div className={styles.tags}>
                    <Link href="/"><a>#react</a></Link>
                    <Link href="/"><a>#javascript</a></Link>
                    <Link href="/"><a>#WebDev</a></Link>
                </div>

                <div className={styles.stats}>
                    <div>{post.reactionsCount} reactions</div> 
                    <div>{post.commentsCount} comments</div>
                    <div><button type="button" className="btn btn-default">Save</button></div>
                </div>
            </div>
            
        </div>
    )
}

export default Post;