import React from 'react';
import './SideDrawer.css';
import profileImage from '../../images/profilePicture.jpg';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
        <img className='img' src={profileImage} width="200" height="200" alt='Avatar'/>
            <ul>
                <li><a href='/'>Products</a></li>
                <li><a href='/'>Users</a></li>
            </ul>
        </nav>
        );
    }

export default sideDrawer;