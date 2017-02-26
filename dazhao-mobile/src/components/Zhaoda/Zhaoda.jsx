import React from 'react';
import "./Zhaoda.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class Zhaoda extends React.Component {
  render() {
    return(
      <div className="container zhaoda">
        <header>
          <div className="search">
            <div className="input">
              <input type="text" placeholder="搜索话题、问题、行家..."/>
              <span><img src="/src/images/search.png"/></span>
            </div>
            <span className="query">提问</span>
          </div>
        </header>
        <nav>
          <ul>
            <Link to="/Zhaoda/main" activeClassName="active">
              <li>
                首页
              </li>
            </Link>
            <Link to="/Zhaoda/discover" activeClassName="active">
              <li>
                发现  
              </li>
            </Link>
            <li>专栏</li>
            <li>消息</li>
          </ul>
        </nav>
        {this.props.children}

      </div>
    )
  }
}
export default Zhaoda;
