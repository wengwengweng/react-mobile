import React from "react";
import ReactDOM from "react-dom";

import {IndexRoute, Route, Router, hashHistory} from "react-router";
// 公共部分
import MainLayout from "./src/components/Public/MainLayout.jsx";

// 首页部分
import Home from "./src/components/Home/Home/Home.jsx";
import HomeJobDetail from "./src/components/Home/JobDetail/JobDetail.jsx";
import HomeCompany from "./src/components/Home/Company/Company.jsx";
import HomeShRecruit from "./src/components/Home/ShRecruit/ShRecruit.jsx";
import HomeEnterprise from "./src/components/Home/Enterprise/Enterprise.jsx";
import HomeIntern from "./src/components/Home/Intern/Intern.jsx";
import HomePositions from "./src/components/Home/Positions/Positions.jsx";
import SearchPage from "./src/components/Home/SearchPage/SearchPage.jsx";

// 职官部分
import ZhiGuanHome from "./src/components/ZhiGuan/Home/Home.jsx";

// 招答部分
import Zhaoda from "./src/components/Zhaoda/Zhaoda/Zhaoda.jsx";
import ZhaoDaIndex from "./src/components/Zhaoda/ZhaoDaIndex/ZhaoDaIndex.jsx";
import ZhaoDaDiscover from "./src/components/Zhaoda/ZhaoDaDiscover/ZhaoDaDiscover.jsx";
import ZhaoDaFeature from "./src/components/Zhaoda/ZhaoDaFeature/ZhaoDaFeature.jsx";
import ZhaoDaMessage from "./src/components/Zhaoda/ZhaoDaMessage/ZhaoDaMessage.jsx";
import ZhaoDaToFeatures from "./src/components/Zhaoda/ZhaoDaToFeatures/ZhaoDaToFeatures.jsx";
import ZhaoDaToTopic from "./src/components/Zhaoda/ZhaoDaToTopic/ZhaoDaToTopic.jsx";
import ZhaoDaTopic from "./src/components/Zhaoda/ZhaoDaTopic/ZhaoDaTopic.jsx";
import ZhaoDaSearch from "./src/components/Zhaoda/ZhaoDaSearch/ZhaoDaSearch.jsx";
import ZhaoDaToQuestion from "./src/components/Zhaoda/ZhaoDaToQuestion/ZhaoDaToQuestion.jsx";
import ZhaoDaResponse from "./src/components/Zhaoda/ZhaoDaResponse/ZhaoDaResponse.jsx";
import ZhaoDaConsult from "./src/components/Zhaoda/ZhaoDaConsult/ZhaoDaConsult.jsx";
import ZhaoDaQuesDetail from "./src/components/Zhaoda/ZhaoDaQuesDetail/ZhaoDaQuesDetail.jsx";
import ZhaoDaZhuanLan from "./src/components/Zhaoda/ZhaoDaZhuanLan/ZhaoDaZhuanLan.jsx";
import ZhaoDaUser from "./src/components/Zhaoda/ZhaoDaUser/ZhaoDaUser.jsx";
import ZhaoDaTalk from "./src/components/Zhaoda/ZhaoDaTalk/ZhaoDaTalk.jsx";
import ZhaoDaChooseTopic from "./src/components/Zhaoda/ChooseTopic/ChooseTopic.jsx";
import ZhaoDaComents from "./src/components/Zhaoda/ZhaoDaComents/ZhaoDaComents.jsx";
import ZhaoDaAddAnswer from "./src/components/Zhaoda/ZhaoDaAddAnswer/ZhaoDaAddAnswer.jsx";
import ZhaoDaInvitetoAnswer from "./src/components/Zhaoda/ZhaoDaInvitetoAnswer/ZhaoDaInvitetoAnswer.jsx";

// 个人中心部分
import Mine from "./src/components/Mine/Mine/Mine.jsx";
import MineGrowRecord from "./src/components/Mine/GrowRecord/GrowRecord.jsx";
import MineCvCenter from "./src/components/Mine/CvCenter/CvCenter.jsx";
import MineNotify from "./src/components/Mine/Notify/Notify.jsx";
import MineCvMessage from "./src/components/Mine/CvMessage/CvMessage.jsx";
import MineEditMg from "./src/components/Mine/EditMg/EditMg.jsx";
import MineEduEx from "./src/components/Mine/EduEx/EduEx.jsx";
import MinePractice from "./src/components/Mine/Practice/Practice.jsx";
import MineDropInBox from "./src/components/Mine/DropInBox/DropInBox.jsx";
import MinePlatformDropIn from "./src/components/Mine/PlatformDropIn/PlatformDropIn.jsx";
import MineEmailDropIn from "./src/components/Mine/EmailDropIn/EmailDropIn.jsx";
import MineInvitation from "./src/components/Mine/Invitation/Invitation.jsx";
import MineActivity from "./src/components/Mine/Activity/Activity.jsx";
import MineZhaoDa from "./src/components/Mine/MineZhaoDa/MineZhaoDa.jsx";
import MineConcern from "./src/components/Mine/Concern/Concern.jsx";
import MineConcernQuestion from "./src/components/Mine/ConcernQuestion/ConcernQuestion.jsx";
import MineConcernTopic from "./src/components/Mine/ConcernTopic/ConcernTopic.jsx";
import MineConcernUser from "./src/components/Mine/ConcernUser/ConcernUser.jsx";
import MineQuiz from "./src/components/Mine/Quiz/Quiz.jsx";
import MineAnswers from "./src/components/Mine/Answers/Answers.jsx";
import MineFavoritePage from "./src/components/Mine/FavoritePage/FavoritePage.jsx";
import MineFavoriteJobs from "./src/components/Mine/FavoriteJobs/FavoriteJobs.jsx";
import MineFavoriteCompanys from "./src/components/Mine/FavoriteCompanys/FavoriteCompanys.jsx";

import ZhaoDaQuiz from "./src/components/Zhaoda/ZhaoDaQuiz/ZhaoDaQuiz.jsx";

// 用户验证
import ToLogin from "./src/components/Verify/Login/ToLogin.jsx";
import Login from "./src/components/Verify/Login/Login.jsx";
import Register from "./src/components/Verify/Register/Register.jsx";

function requireAuth (nextState, replace) {

    if (true) {

        replace({
            "pathname": "/tologin",
            "state": {"nextPathname": nextState.location.pathname}
        });

    }

}

// Const getZhaoDaIndex = (location, cb) => {
//   Require.ensure([],function(require){
//     Cb(null, require('./src/components/Zhaoda/ZhaoDaIndex/ZhaoDaIndex.jsx').default);
//   }, 'ZhaoDaIndex')
// };
//
// Const getZhaoDaDiscover = (location, cb) => {
//   Require.ensure([],function(require){
//     Cb(null, require('./src/components/Zhaoda/ZhaoDaDiscover/ZhaoDaDiscover.jsx').default);
//   }, 'ZhaoDaDiscover')
// };
//
// Const getZhaoDaFeature = (location, cb) => {
//   Require.ensure([],function(require){
//     Cb(null, require('./src/components/Zhaoda/ZhaoDaFeature/ZhaoDaFeature.jsx').default);
//   }, 'ZhaoDaFeature')
// };

const Routes = () => <Router history={hashHistory}>
    <Route path="/" component={MainLayout}>
        <IndexRoute component={Home} />
        <Route path="zhiGuan" component={ZhiGuanHome} />
        <Route path="home" component={Home} />
        <Route path="Zhaoda" component={Zhaoda}>
            <IndexRoute component={ZhaoDaIndex} />
            <Route path="main" component={ZhaoDaIndex} />
            <Route path="discover" component={ZhaoDaDiscover} />
            <Route path="feature" component={ZhaoDaFeature} />
        </Route>
        <Route path="topic" component={ZhaoDaTopic} />
        <Route path="message" component={ZhaoDaMessage} />
        <Route path="search" component={ZhaoDaSearch} />
        <Route path="response" component={ZhaoDaResponse} />
        <Route path="quiz" component={ZhaoDaQuiz} />
        <Route path="consult" component={ZhaoDaConsult} />
        <Route path="detail" component={ZhaoDaQuesDetail} />
        <Route path="toquestion/:qid" component={ZhaoDaToQuestion} />
        <Route path="tofeature" component={ZhaoDaToFeatures} />
        <Route path="totopic/:tid" component={ZhaoDaToTopic} />
        <Route path="user" component={ZhaoDaUser} />
        <Route path="zhuanlan" component={ZhaoDaZhuanLan} />
        <Route path="talk" component={ZhaoDaTalk} />
        <Route path="choosetopic" component={ZhaoDaChooseTopic} />
        <Route path="coments" component={ZhaoDaComents} />
        <Route path="addanswer/:qid" component={ZhaoDaAddAnswer} />
        <Route path="invitetoanswer" component={ZhaoDaInvitetoAnswer} />

        <Route path="jobdetail/:id" component={HomeJobDetail} />
        <Route path="company/:id" component={HomeCompany} />
        <Route path="schoolRecruit" component={HomeShRecruit} />
        <Route path="enterprise" component={HomeEnterprise} />
        <Route path="intern" component={HomeIntern} />
        <Route path="searchPage" component={SearchPage} />

        <Route path="mine" component={Mine} />
        <Route path="cvcenter" component={MineCvCenter} />
        <Route path="growrecord" component={MineGrowRecord} />
        <Route path="notify" component={MineNotify} />
        <Route path="cvmessage/:uid" component={MineCvMessage} />
        <Route path="edmessage" component={MineEditMg} />
        <Route path="edupexp" component={MineEduEx} />
        <Route path="practice" component={MinePractice} />
        <Route path="dropinbox" component={MineDropInBox}>
            <Route path="platformdropin" component={MinePlatformDropIn} />
            <Route path="emaildropin" component={MineEmailDropIn} />
        </Route>
        <Route path="invitation" component={MineInvitation} />
        <Route path="activity" component={MineActivity} />

        <Route path="minezhaoda" component={MineZhaoDa}>
            <Route path="concern" component={MineConcern}>
                <IndexRoute component={MineConcernQuestion} />
                <Route path="concernquestion" component={MineConcernQuestion} />
                <Route path="concerntopic" component={MineConcernTopic} />
                <Route path="concernuser" component={MineConcernUser} />
            </Route>
            <Route path="quiz" component={MineQuiz} />
            <Route path="answer" component={MineAnswers} />
        </Route>

        <Route path="favoritepage" component={MineFavoritePage}>
            <Route path="favoritejobs" component={MineFavoriteJobs} />
            <Route path="favoritecompanys" component={MineFavoriteCompanys} />
        </Route>
        <Route path="tologin" component={ToLogin} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
    </Route>
</Router>;

ReactDOM.render(
    <Routes />, document.getElementById("app"));
