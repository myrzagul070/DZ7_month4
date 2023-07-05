
import {PATHS} from "../../App";
import {NavLink} from "react-router-dom";
import classes from './MyHeader.module.css'


function MyHeader() {
    return (
        <div style={{width:'100%'}}>
            <header style={{display:'flex', justifyContent:"space-around", fontSize:'20px', background:'pink', height:'60px', alignItems:'center'}}>

                            <NavLink to={PATHS.counter} className={({isActive})=> isActive ? classes.active : '' }>Counter</NavLink>
                            <NavLink to={PATHS.posts} className={({isActive})=> isActive ? classes.active : '' }>Posts</NavLink>
                            <NavLink to={PATHS.mui} className={({isActive})=> isActive ? classes.active : '' }>MUI</NavLink>

            </header>
        </div>
    );
}

export default MyHeader;