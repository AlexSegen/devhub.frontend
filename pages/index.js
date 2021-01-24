import Layout from '../components/global/Layout'
import PostList from '../components/home/PostList'

const Index = () => {

    return ( 
        <Layout location="home">
            <PostList/>
        </Layout>
     );
}

export default Index;