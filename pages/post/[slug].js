import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import renderHTML from 'react-render-html';

import { formatDate } from '../../helpers/utils';

import Layout from '../../components/global/Layout'

import { BlogContext } from '../../context/blogContext'
import { AuthContext } from '../../context/authContext';

import styles from './article.module.scss';

const Article = () => {

    const { GetPost, post, loading, error } = useContext(BlogContext);
    const { isAuthenticated, user } = useContext(AuthContext);

    const router = useRouter()
    const { slug } = router.query

    useEffect(() => {
        GetPost(slug);
    }, [slug])

    if (loading)
        return <Layout location="article">Loading your article</Layout>

    return ( 
        <Layout location="article" grid="article">
            {
                post && (<div className={`dh__box ${styles.dh__article}`}>
                    
                    {
                        post.cover && (
                            <div className={styles.cover}>
                                <img src={post.cover} alt={post.title}/>
                            </div>
                        )
                    }

                    <h1 className={styles.title}>{post.title}</h1>

                    <div className={styles.tags}>
                        {
                            post.taglists.map((tag) => (
                                <Link href={`/tag/${tag.slug}`} key={tag._id}><a>#{tag.name}</a></Link>
                            ))
                        }
                    </div>
                    
                    {
                        post.postedBy && (
                            <div className="row">
                                <div className="col-sm-6">
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
                                            <span>Created</span> {formatDate(post.createdAt, "MMM Do YYYY [at] HH:MM:ss[Hrs]")}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {
                                    isAuthenticated && (user._id === post.postedBy._id) && (
                                        <div className="col-sm-6 text-right">
                                            <Link href={`/profile/posts/${post.slug}`}>
                                                <a className="btn btn-sm btn-secondary">Edit this post</a>
                                            </Link>
                                        </div>
                                    )
                                }
                            
                            </div>

                        )
                    }

                    <div className={styles.content}>
                        {renderHTML(post.body)}
                    </div>

                </div>)
            }
            
        </Layout>
     );
}

export default Article;