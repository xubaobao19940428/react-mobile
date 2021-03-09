import React, { Component } from 'react'
import Footer from './component/footer'
import { renderRoutes } from 'react-router-config';
 class Layout extends Component {
     
    constructor(props) {
        super(props)
        this.state={
            route:props.route
        }
    }
    componentDidMount() {
        
    }
    shouldComponentUpdate(){
        return false
    }
    tabUpdate=(item)=>{
        this.props.history.push({
            pathname:item.path
        })
    }
    render() {
        const route =this.state.route
        return(
          <div className="layout">
            {renderRoutes(route.children)}
              <Footer tabUpdate={this.tabUpdate} pathname={this.props.location.pathname}></Footer>
          </div>  
        )
    }

}
export default Layout
