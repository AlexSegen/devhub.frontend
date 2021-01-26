import Sidebar from './Sidebar';
import ArticleToolbar from "../sidebars/ArticleToolbar";

const LeftSidebar = ({location}) => {

    return (
        <div>

            { location === "home" && <Sidebar/> }
            
            { location === "article" && <ArticleToolbar/> }
        
        </div>
    )
}

export default LeftSidebar;