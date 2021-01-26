import Link from 'next/link'
import { useRouter } from 'next/router'
import {useState, useEffect } from 'react';
import ApiService from '../../services/api.service';



import styles from './tags.module.scss';

const Tags = () => {

    const router = useRouter()
    const { slug } = router.query

    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTags = () => {

            setLoading(true);
        ApiService.get('/tags?sort=-name').then(res => {
            setLoading(false);
            setTags(res.data);
        }).catch(error => {
            setLoading(false);
            console.log('There was an error getting tags list.', error.message);
        });

    }


    useEffect(() => {
        getTags();
    }, [])

    return (
        <div className={styles.dh__tags}>
            <h6><strong>Popular Tags</strong></h6>
            {
                loading && <>Loading Tags</>
            }
            <div className={styles.list}>
                {
                    tags.map(tag => (
                        <Link key={tag._id} href={`/tag/${tag.slug}`}>
                            <a className={slug === tag.slug ? styles.active : ""}>#{tag.name}</a>
                        </Link>
                    ))
                }              

            </div>
        </div>
    )
}

export default Tags;