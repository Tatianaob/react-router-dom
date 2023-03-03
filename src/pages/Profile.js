import { ChangeProfile } from "../components/ChangeProfile";
import {useContext} from "react"; //to use the AppContext
import { AppContext } from "../App";

export const Profile = () => {
    const {username} = useContext(AppContext);
    return (
     <div>
        PROFILE, username is {username} 
        <ChangeProfile/> 
     </div>
     );
};