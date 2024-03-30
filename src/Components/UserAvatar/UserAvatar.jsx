import Cookies from 'js-cookie';
import React from 'react';
import { useSelector } from 'react-redux';
import UserAvatar from 'react-user-avatar';

function UserAvatarIcon() {
    const windowSize = window.innerWidth;
    const loginStatus = useSelector(state => state.authentication.loginStatus);
    const userName = loginStatus ? JSON.parse(Cookies.get('user')).first_name : ''

    return <UserAvatar size={windowSize < 1024 ? "30" : "40"} name={userName} className="text-white hidden sm:block cursor-pointer hover:brightness-105 transition-all duration-200"/>
}

export default UserAvatarIcon;