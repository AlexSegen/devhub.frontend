import ComposeForm from '../components/compose/ComposeForm'
import Layout from '../components/global/Layout'

// import styles from './new-post.module.scss';

const NewPost = () => {

    return ( 
        <Layout location="compose">
            <div className="dh__box __page">
                <h1>New post</h1>
                <ComposeForm/>
            </div>
        </Layout>
     );
}

export default NewPost;