import { useContext, useState, useEffect } from 'react';
import Layout from '../components/global/Layout'
import withAuth from '../components/withAuth'
import { AuthContext } from '../context/authContext';

import styles from './profile.module.scss';

const Profile = () => {

    const [activeTab, setActiveTab] = useState("about");
    const { GetProfile, user } = useContext(AuthContext);


    useEffect(()=> {
        GetProfile();
    }, []);

    return ( 
        <Layout location="profile" grid="wide">
            
        <div className={styles.emp_profile}>
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.profile_img}>
                            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`}/>
                            <div className={`${styles.file} btn btn-lg btn-primary`}>
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={styles.profile_head}>
                                    <h5>
                                        {user.first_name} {user.last_name}
                                    </h5>
                                    <h6>
                                        {user.role || "--"}
                                    </h6>
                                    <p className={styles.proile_rating}>Posts created : <span>9</span></p>
                            <ul className={`nav nav-tabs ${styles.nav_tabs}`} id="myTab" role="tablist">
                                <li className="nav-item">
                                    <button onClick={() => setActiveTab("about")} type="button" className={`nav-link ${styles.nav_link} ${activeTab === "about" ? `active ${styles.active}`: ''}`}>About</button>
                                </li>
                                <li className="nav-item">
                                    <button onClick={() => setActiveTab("timeline")} type="button" className={`nav-link ${styles.nav_link} ${activeTab === "timeline" ? `active ${styles.active}`: ''}`}>Timeline</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className={styles.profile_edit_btn} name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.profile_work}>
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className={`tab-content ${styles.profile_tab}`} id="myTabContent">
                            <div className={`tab-pane fade ${activeTab === "about" ? 'show active': ''}`}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="text-uppercase">{user._id}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.first_name} {user.last_name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.phone || "--"}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Location</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.location ? user.location.country : "--"}</p>
                                            </div>
                                        </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === "timeline" ? 'show active': ''}`}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>


        </Layout>
     );
}

/* Profile.getInitialProps = async props => {
    console.info('##### Congratulations! You are authorized! ######', props);
    return {};
}; */

//export default withPrivateRoute(Profile);
export default withAuth(Profile);