import React from 'react';
import "./ZhaoDaCvCenter.scss";
import TopBar from "../TopBar/TopBar.jsx";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaCvCenter extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.showBottom();
  }

  render() {
    return(
      <div className="ZhaoDaCvCenter">
        <header>
          <TopBar title="简历中心" border="boder"/>
        </header>

        <h3>在线简历</h3>
        <div className="main">
          <div className="cvitems">
            <div className="cvleft">
              <span>互联网产品岗</span>
              <span>互联网产品<em>上海市</em></span>
            </div>
            <span className="cvright">
              <em>预览</em>
              <em>编辑</em>
            </span>
          </div>
          <div className="cvitems">
            <div className="cvleft">
              <span>互联网产品岗</span>
              <span>互联网产品<em>上海市</em></span>
            </div>
            <span className="cvright">
              <em>预览</em>
              <em>编辑</em>
            </span>
          </div>
        </div>

        <div className="options">
          <p><em>附件简历</em><span><img src="/src/images/Back_Button.png"/></span></p>
          <p><em>投递箱</em><span><img src="/src/images/Back_Button.png"/></span></p>
          <p><em>邀请函</em><span><img src="/src/images/Back_Button.png"/></span></p>
          <p><em>收藏夹</em><span><img src="/src/images/Back_Button.png"/></span></p>
        </div>

      </div>
    )
  }
}
export default ZhaoDaCvCenter;
