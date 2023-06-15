import { NavLink, useMatch } from "react-router-dom";
import {motion} from 'framer-motion';
const CustomLink = ({children, to, ...props}) =>{
    const match = useMatch(to);
    const NavLinkMotion = motion(NavLink);
    return(
        <NavLinkMotion 
        to = {to}
        style={{
            color: match ? '#007D34' : '#fff'
        }} 
        {...props}>
            {children}
        </NavLinkMotion>
    )
}
export default CustomLink