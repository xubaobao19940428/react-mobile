import React, { Component } from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Dashboard from '../../dashboard'
// import Home from '../../home'
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
               
        }
    }
    componentDidMount() {

    }
    
    render() {
       
        return (
           <div>
              <Route exact path="/" component={Dashboard} />
              <Route  path="/home" />
              {/* <Route  path="/Jsdemoc" component={Jsdemoc} /> */}
           </div>
        )
    }
}
export default Nav