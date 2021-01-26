import Layout from '../components/global/Layout'

const Unauthorized = () => {

    return ( 
        <Layout location="unauthorized">
            <div className="p-5 text-center">
                <h2>Hold up!</h2>
                <p>You must log in first</p>
            </div>
        </Layout>
     );
}

export default Unauthorized;