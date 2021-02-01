import { useRouter } from 'next/router'

import Layout from '../../components/global/Layout'
import PostList from '../../components/home/PostList'

const Tag = () => {

    const router = useRouter()
    const { period } = router.query

    return ( 
        <Layout location="home">
            <PostList title="Posts" resource="top" value={period} />
        </Layout>
     );
}

export default Tag;