import { useRouter } from 'next/router'

import Layout from '../../components/global/Layout'
import PostList from '../../components/home/PostList'

const Tag = () => {

    const router = useRouter()
    const { slug } = router.query

    return ( 
        <Layout location="home">
            <PostList title="Search by Tag" resource="tag" value={slug} />
        </Layout>
     );
}

export default Tag;