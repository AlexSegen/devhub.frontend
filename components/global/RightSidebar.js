import PropertyList from "../compose/PropertyList";
import UserCard from "../sidebars/UserCard";

const RightSidebar = ({location}) => {

    return (
        <div>
            
            {location === "article" && <UserCard/>}

            {location === "compose" && <PropertyList/>}
        
        </div>
    )
}

export default RightSidebar;