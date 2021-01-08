import React from 'react'
import {login} from '@/api/index'
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentDidMount(){
        login({
            client: 1001,
            code: "9090909",
            mobile: "166",
            parent_id: 0,
            phone_code: "+60",
        }).then(resultes=>{
            if(resultes.status==='success'){
                sessionStorage.setItem('token',resultes.data.token)
                this.props.history.push({
                    pathname:'/'
                })
            }
        })
    }
    render() {
        return (
            <div className="login">
                <header className="login_header">
                    111
              </header>
            </div>
        );
    }

}

export default Login;
