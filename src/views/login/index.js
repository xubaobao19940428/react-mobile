import React from 'react'
// import {login} from '@/api/index'
import './index.scss'
import loginImg from '@/assets/login/logo.png'
import ThreeLogin from '@/components/threeLogin'
class Login extends React.Component {
    constructor(props){
        super()
        this.state={
            loginImg:loginImg
        }
    }
    componentDidMount(){
        // login({
        //     client: 1001,
        //     code: "9090909",
        //     mobile: "166",
        //     parent_id: 0,
        //     phone_code: "+60",
        // }).then(resultes=>{
        //     if(resultes.status==='success'){
        //         sessionStorage.setItem('token',resultes.data.token)
        //         this.props.history.push({
        //             pathname:'/'
        //         })
        //     }
        // })
    }
    render() {
        let loginImg = this.state.loginImg
        return (
            <div className="login">
                <div className="login_header">
                   <img src={loginImg} alt=""></img>
                </div>
                <div className="login_button">
                    <div className="login_reg">
                            注册
                    </div>
                    <div className="login_log">
                            登录
                    </div>
                </div>
                <ThreeLogin></ThreeLogin>
            </div>
        );
    }

}

export default Login;
