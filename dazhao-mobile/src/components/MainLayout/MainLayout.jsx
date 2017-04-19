import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import "./MainLayout.scss";
import Message from "./Message/Message.jsx";
import {Link} from "react-router";
import * as actionCreators from "../../actions/show.js";
import QueueAnim from 'rc-queue-anim';

class Layout extends React.Component {

    constructor (props) {

        super(props);

    }

    render () {
        console.log(this.props.location.pathname);
        const {actions, show} = this.props;

        const arr = [1,2,3,4]

        const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
         "showTop": (text) => {

             actions.showTop(text);

         },
         "showBottom": (text) => {

             actions.showBottom(text);

         },
         "showMessage": (text) => {

             actions.showMessage(text);

         },
         "key":this.props.location.pathname,
         show
     })
    );

        return (
            <div>
                {show.show_message?<Message content = {show.show_message} showMessage = {(text) => {
                    actions.showMessage(text);
                }} />:''}
                <QueueAnim>
                    {childrenWithProps}
                </QueueAnim>
                {show.show_bottom
              ? <footer>
                  <div>
                      <Link to="/home" className="bg home" activeClassName="home2">
                          <div>
                              <p>首页</p>
                          </div>
                      </Link>
                  </div>
                  <div>
                      <Link to="/zhiGuan" className="bg zhiguan" activeClassName="zhiguan2">
                          <div>
                              <p>职观</p>
                          </div>
                      </Link>
                  </div>
                  <div>
                      <Link to="/Zhaoda/main" className="bg zhaoda" activeClassName="zhaoda2">
                          <div>
                              <p>招答</p>
                          </div>
                      </Link>
                  </div>
                  <div>
                      <Link to="/mine" className="bg mine" activeClassName="mine2">
                          <div>
                              <p>我的</p>
                          </div>
                      </Link>
                  </div>
              </footer> : ""}
            </div>
        );

    }
}


const mapStateToProps = (state) => ({"show": state.show});

const mapDispatchToProps = (dispatch) => ({"actions": bindActionCreators(actionCreators, dispatch)});


const MainLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);


export default MainLayout;
