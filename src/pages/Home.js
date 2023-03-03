import {useContext} from "react"; //to use the AppContext
import { AppContext } from "../App";


export const Home = () => {
    const {username} = useContext(AppContext);
    return <h1>this is the home page, user is {username}</h1>
};