import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import './styles/index.scss'
class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data: ['1', '2', '3'],
            imgHeight: 176,
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
              data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
          }, 100);
    }
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard_carousel">
                <WingBlank>
                    <Carousel
                    autoplay={true}
                    infinite
                    autoplayInterval={3000}
                    infinite={true}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                </div>
            </div>
        );
    }

}

export default Dashboard;
