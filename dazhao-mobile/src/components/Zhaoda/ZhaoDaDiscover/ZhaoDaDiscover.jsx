import React from "react";
import AnswerMain from "../../MainLayout/AnswerMain/AnswerMain.jsx";
import "./ZhaoDaDiscover.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaDiscover extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "hotTopics": [
            ],
            "goodAnswer": [
                {
                    "uid": 1,
                    "theme": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    "name": "Michal",
                    "job": "骨灰级教练",
                    "imgsrc": "/src/images/vip.png",
                    "remark": 9,
                    "agree": 14,
                    "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                    "collect": false
                },
                {
                    "uid": 2,
                    "theme": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    "name": "Michal",
                    "job": "骨灰级教练",
                    "imgsrc": "/src/images/vip.png",
                    "remark": 12,
                    "agree": 14,
                    "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                    "collect": false
                },
                {
                    "uid": 3,
                    "theme": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    "name": "Michal",
                    "job": "骨灰级教练",
                    "imgsrc": "/src/images/vip.png",
                    "remark": 13,
                    "agree": 14,
                    "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                    "collect": false
                }
            ]
        };
        this.fetchHotTopic = this.fetchHotTopic.bind(this);

    }

    componentDidMount () {

        this.fetchHotTopic();

    }

    // 精品回答
    fetchGoodAnswer () {

    }

    // 热门话题
    fetchHotTopic () {

        console.log("start fetch");

        ajax({"url": "/zhaoda/topic/hottopics?categoryid=-1"}).
        then((data) => {

            console.log(data);

            if (data.code === "S01") {

                // 查询成功
                const hotTopic = data.contents.slice(0, 10);

                console.log("hotTopic", hotTopic);

                this.setState({"hotTopics": hotTopic});

            } else if (data.code === "E01") {

                // 如果查询出错，启用备用数据
                this.setState({"hotTopics": this.state.hotTopics});

            }

        });

    }

    render () {

        const {goodAnswer, hotTopics} = this.state;
        // Console.log(hotTopics)

        const AnswerMainList = goodAnswer.map((value, i) => <AnswerMain isTopic="0" key={i} data={value} />);

        const LatestDynamicList = hotTopics.map((elem, index) =>
            <div className="Citems" key={index}>
                <Link to={`/totopic/${elem.tid}`}>
                    <span className="img">
                        <img src={"/src/images/topicImg.png" || elem.img} alt="热门话题" />
                    </span>
                    <div className="detail">
                        <span className="span2">{elem.topicname}</span>
                        <span className="care">
                            <span>回答:{elem.questionnum}</span>
                            <span>关注:{elem.care}</span>
                        </span>
                    </div>
                </Link>
            </div>
            );


        return (
            <div className="ZhaoDaDiscover">
                <div id="dynamic">
                    <div className="title"><span><img src="/src/images/latest.png" /></span>热门话题</div>
                    <div className="content">
                        <div className="citemswrap">
                            {LatestDynamicList}
                        </div>
                        <div className="Formore1"><Link to="/topic">更多话题</Link></div>


                    </div>
                </div>
                <div id="latest">
                    <div className="title"><span><img src="/src/images/latest.png" /></span>精品回答
          </div>

                    {AnswerMainList}

                </div>
            </div>
        );

    }
}
export default ZhaoDaDiscover;
