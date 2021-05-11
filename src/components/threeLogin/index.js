import React from 'react'
import GoogleLogin from '@/assets/login/google-login.png'
import LineLogin from '@/assets/login/line-login.png'
import './index.scss'
const ThreeLogin = (props) => {
    const googleLoginDetail = function () { }
    const lineLoginDetail = function () { }
    return (
        <div className="three_login">
            <div>或用社交媒体账号登录</div>
            <div className="three_login_logo">
                <img alt="" src={GoogleLogin} onClick={googleLoginDetail}></img>
                <img alt="" src={LineLogin} onClick={lineLoginDetail}></img>
            </div>
        </div>
    )
}

export default ThreeLogin
