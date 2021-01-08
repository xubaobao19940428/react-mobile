import React, { Component } from 'react'
import './styles/footer.scss'
import { withRouter } from "react-router-dom";
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    name: 'dashboard',
                    noActiveImg: require('../../../assets/img/tabBar/tabBar_1.png').default,
                    activeImg: require('../../../assets/img/tabBar/tabBar_cur_1.png').default,
                    key: 'dashboard',
                    path:'/'
                },
                {
                    noActiveImg: require('../../../assets/img/tabBar/tabBar_2.png').default,
                    activeImg: require('../../../assets/img/tabBar/tabBar_cur_2.png').default,
                    name: 'home',
                    key: 'home',
                    path:'/home'
                },
                {
                    noActiveImg: require('../../../assets/img/tabBar/tabBar_3.png').default,
                    activeImg: require('../../../assets/img/tabBar/tabBar_cur_3.png').default,
                    name: 'cart',
                    key: 'cart',
                    path:'/cart'
                },
                {
                    noActiveImg: require('../../../assets/img/tabBar/tabBar_4.png').default,
                    activeImg: require('../../../assets/img/tabBar/tabBar_cur_4.png').default,
                    name: 'my',
                    key: 'my',
                    path:'/my'
                },
            ],
            activeIndex: 0
        }
    }
    componentDidMount() {
        this.state.list.map((item,index)=>{
            if(item.path===this.props.location.pathname){
                this.setState({
                    activeIndex:index
                })
            }
        })
    }
    shouldComponentUpdate(){

    return true
    }
    tabClick(item,index) {
        this.setState({
            activeIndex: index
        })
        this.props.tabUpdate(item);
    }
    render() {
        let list = this.state.list
        return (
            <footer>
                <ul>
                    {
                        list.map((item, index) => {

                            return <li key={item.key} className={this.state.activeIndex ===index ? 'active' : ''} >
                                {
                                    this.state.activeIndex ===index ?<div><img src={item.activeImg} alt=""></img><span>{item.name}</span></div>:<div onClick={() => this.tabClick(item,index)}><img src={item.noActiveImg} alt=""></img><span>{item.name}</span></div>
                                }
                                
                            </li>
                        })
                    }
                </ul>
            </footer>
        )
    }
}
export default withRouter(Footer)