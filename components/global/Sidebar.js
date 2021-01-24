import Tags from '../sidebars/tags';
import WelcomeBox from '../sidebars/WelcomeBox';
import styles from './sidebar.module.scss';

const Sidebar = () => {

    return (
        <div className={styles.dh__sidebar}>
            <WelcomeBox/>
            <Tags/>
        </div>
    )
}

export default Sidebar;