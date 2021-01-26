import UserCard from "../sidebars/UserCard";

const RightSidebar = ({location}) => {

    return (
        <div>
            
            {location === "article" && <UserCard/>}
        
        </div>
    )
}

export default RightSidebar;