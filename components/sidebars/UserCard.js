import Link from 'next/link'
import { useContext } from 'react';

import { formatDate } from '../../helpers/utils';
import { AuthContext } from '../../context/authContext';
import { BlogContext } from '../../context/blogContext';

import styles from './userCard.module.scss'

const Feature = ({label, value}) => {
    return (
        <div className={styles.feature}>
            <p className={styles.label}>{label}</p>
            <p className={styles.value}>{value}</p>
        </div>
    )
}

const UserCard = () => {

    const { isAuthenticated, user } = useContext(AuthContext);
    const { post } = useContext(BlogContext);


    if (!post)
        return null;


    const { postedBy } = post;

    return (
        <div className={`dh__box ${styles.dh__user}`}>

            <div className={styles.details}>
                <img className={styles.avatar} src={postedBy.avatar} alt={`${postedBy.first_name} ${postedBy.last_name}`}/>
                <div>
                    <h4 className={styles.name}>{postedBy.first_name} {postedBy.last_name}</h4>
                    <p className={styles.joined}>Joined in {formatDate(postedBy.createdAt, "MMM Do YYYY")}</p>
                </div>
            </div>
            
            <p className={styles.introduction}>I am a passionate #FrontEnd #WebDeveloper & #WebDesigner at @Chileautos / @carsales 😎 Cada día amando más la web. #WebDesign #Gamer #Longboarder</p>

            {
                isAuthenticated && post && (post.postedBy._id === user._id) && (
                    <Link href="/profile">
                        <a className="btn btn-primary w-100 my-2">Edit Profile</a>
                    </Link>
                )
            }

            <Feature label="Work" value="Frontend Developer at Carsales"/>

            <Feature label="Location" value="Chile"/>

            <Feature label="Posts" value="3"/>
            
        </div>
    )
}

export default UserCard;