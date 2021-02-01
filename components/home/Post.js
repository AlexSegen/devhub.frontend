import Link from 'next/link'
import { useContext, useState } from "react";
import { formatDate } from '../../helpers/utils';
import { AuthContext } from '../../context/authContext';

import styles from './post.module.scss'

const Post = ({post, index}) => {

    const { isAuthenticated } = useContext(AuthContext);


    return (
        <div className={styles.dh__post}>
            

            {
                index === 0 && post.cover &&<Link href={`/post/${post.slug}`}>
                                    <a className={styles.cover}>
                                        <img src={post.cover} alt={post.title}/>
                                    </a>
                                </Link>
            }

            <div className={styles.content}>

                {
                    post.postedBy && (

                        <div className={styles.author}>
                            <Link href="/">
                                <a className={styles.avatar}>
                                    <img src={post.postedBy.avatar} alt={`${post.postedBy.first_name} ${post.postedBy.last_name}`}/>
                                </a>
                            </Link>
                            <div className={styles.info}>
                                <Link href="/">
                                    <a className={styles.name}>{post.postedBy.first_name} {post.postedBy.last_name}</a>
                                </Link>
                                <div className={styles.date}>
                                    {formatDate(post.createdAt, "MMM Do YY")}
                                </div>
                            </div>
                        </div>
                    )
                }

                <h2 className={styles.title}>
                    <Link href={`/post/${post.slug}`}>
                    <a>{post.title}</a>
                    </Link>
                </h2>

                <div className={styles.tags}>
                    {
                        post.taglists.map((tag) => (
                            <Link href={`/tag/${tag.slug}`} key={tag._id}><a>#{tag.name}</a></Link>
                        ))
                    }
                </div>

                <div className={styles.stats}>
                    <div>{post.reactionsCount} reactions</div> 
                    <div>{post.commentsCount} comments</div>
                    <div>
                        {
                            isAuthenticated && <button type="button" className="btn btn-default">Save</button>
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Post;