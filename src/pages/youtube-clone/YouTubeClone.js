import "./styles3.css"
import {useState} from "react";
import logoY1 from "./icons/hamburger-menu.svg";
import logoY2 from "./icons/youtube-logo.svg";
import logoY3 from "./icons/search.svg";
import logoY4 from "./icons/voice-search-icon.svg";
import logoY5 from "./icons/upload.svg";
import logoY6 from "./icons/youtube-apps.svg";
import logoY7 from "./icons/notifications.svg";
import logoY8 from "./icons/profile-picture-default.jpg";
import logoY9 from "./icons/home.svg";
import logoY10 from "./icons/explore.svg";
import logoY11 from "./icons/subscriptions.svg";
import logoY12 from "./icons/originals.svg";
import logoY13 from "./icons/youtube-music.svg";
import logoY14 from "./icons/library.svg";
import logoY15 from "./img/thumbnail-1.webp";
import logoY16 from "./img/channel-1.jpeg";
import logoY17 from "./img/thumbnail-2.webp";
import logoY18 from "./img/channel-2.jpeg";
import logoY19 from "./img/thumbnail-3.webp";
import logoY20 from "./icons/channel-3.jpeg";
import logoY21 from "./img/thumbnail-4.webp";
import logoY22 from "./icons/channel-4.jpeg";
import logoY23 from "./img/thumbnail-5.webp";
import logoY24 from "./icons/channel-5.jpeg";
import logoY25 from "./img/thumbnail-6.webp";
import logoY26 from "./icons/channel-6.jpeg";
import logoY27 from "./img/thumbnail-7.webp";
import logoY28 from "./icons/channel-7.jpeg";
import logoY29 from "./img/thumbnail-8.webp";
import logoY30 from "./icons/channel-8.jpeg";
import logoY31 from "./img/thumbnail-9.webp";
import logoY32 from "./icons/channel-9.jpeg";
import logoY33 from "./img/thumbnail-10.webp";
import logoY34 from "./icons/channel-10.jpeg";
import logoY35 from "./img/thumbnail-11.webp";
import logoY36 from "./icons/channel-11.jpeg";
import logoY37 from "./img/thumbnail-12.webp";
import logoY38 from "./icons/channel-12.jpeg";

function YouTubeClone() {

    const [now, setNow] = useState('');
    const [sideBarMove, setSideBarMove] = useState(true);

    return (
        <div className={sideBarMove ? "body" : "body2"}>
            <div className={sideBarMove ? "header" : "header2"}>
                <div className="leftSection">
                    <img src={logoY1} alt="er" className="hamburgerLogo" onClick={() => setSideBarMove(!sideBarMove)}/>
                    <a href="https://www.youtube.com/">
                        <img src={logoY2} alt="er" className="youTubeLogo"/>
                    </a>
                </div>

                <div className="middleSection">
                    <input className="search-bar" type="text" placeholder="Search"
                           onChange={(e) => setNow(e.target.value)}/>
                    <a id="readyLink" href={'https://www.youtube.com/results?search_query=' + now}>
                        <button className="searchBarIcon1">
                            <img src={logoY3} alt="er"/>
                            <div className="toolTipSearch">
                                Search
                            </div>
                        </button>
                    </a>
                    <button className="searchBarIcon2">
                        <img src={logoY4} alt="er"/>
                        <div className="toolTipSearch">
                            Search with your voice
                        </div>
                    </button>
                </div>

                <div className="rightSection">
                    <div>
                        <a href="https://studio.youtube.com/channel/UCOPOQAprR867D6L1T_MRGMA/videos?d=ud">
                            <img src={logoY5} alt="er"/>
                        </a>
                        <div className="toolTipSearch">Create</div>
                    </div>
                    <div>
                        <img src={logoY6} alt="er"/>
                        <div className="toolTipSearch">YouTube apps</div>
                    </div>
                    <div className="notificationGroup">
                        <img src={logoY7} alt="er"/>
                        <div className="notifNumber">
                            3
                        </div>
                        <div className="toolTipSearch">Notification</div>
                    </div>
                    <div className="profileSingIn">
                        <a href="https://accounts.google.com/signin/v2/identifier?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dru%26next%3D%252F&hl=ru&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                            <img src={logoY8} alt="er" className="profilePicHead"/>
                        </a>
                        <div className="toolTipSearch">
                            Sign In
                        </div>
                    </div>
                </div>
            </div>

            <div className={sideBarMove ? "sideBar" : "sideBar2"}>
                <a href="https://www.youtube.com/">
                    <div className={sideBarMove ? "sideBarIcon" : "sideBarIcon2"}>
                        <img src={logoY9} alt=""/>
                        <div className="navButtons">Home</div>
                    </div>
                </a>
                <a href="https://www.youtube.com/feed/explore">
                    <div className={sideBarMove ? "sideBarIcon" : "sideBarIcon2"}>
                        <img src={logoY10} alt=""/>
                        <div className="navButtons">Explore</div>
                    </div>
                </a>
                <a href="https://www.youtube.com/feed/subscriptions">
                    <div className={sideBarMove ? "sideBarIcon" : "sideBarIcon2"}>
                        <img src={logoY11} alt=""/>
                        <div className="navButtons">Subscriptions</div>
                    </div>
                </a>
                <a href="https://www.youtube.com/channel/UCqVDpXKLmKeBU_yyt_QkItQ">
                    <div className={sideBarMove ? "sideBarIcon" : "sideBarIcon2"}>
                        <img src={logoY12} alt=""/>
                        <div className="navButtons">Originals</div>
                    </div>
                </a>
                <a href="https://music.youtube.com/">
                    <div className={sideBarMove ? "sideBarIcon" : "sideBarIcon2"}>
                        <img src={logoY13} alt=""/>
                        <div className="navButtons">YouTube Music</div>
                    </div>
                </a>
                <a href="https://www.youtube.com/feed/library">
                    <div className={sideBarMove ? "sideBarIcon" : "sideBarIcon2"}>
                        <img src={logoY14} alt=""/>
                        <div className="navButtons">Library</div>
                    </div>
                </a>
            </div>

            <div>
                <div className="grid-All">
                    <div className="video-preview">
                        <div className="thumbnail-row">
                            <a href="https://www.youtube.com/watch?v=n2RNcPRtAiY">
                                <img className="thumbnail" src={logoY15} alt={'Error'}/>
                            </a>
                            <div>
                                26:54
                            </div>
                        </div>
                        <div className="overallDescriptChannel">
                            <div className="channel-picture">
                                <a href="https://www.youtube.com/c/mkbhd">
                                    <img className="profile-picture" src={logoY16} alt={'Error'}/>
                                    <div className="toolTipChannel">
                                        <img src={logoY16} alt={'Error'}/>
                                        <div className="toolTipChannelInfo">
                                            <p className="nameToolTipInfo">Marques Brownlee</p>
                                            <p className="subscrbToolTipInfo">15M subscribers</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="video-info">
                                <a href="https://www.youtube.com/watch?v=n2RNcPRtAiY">
                                    <p className="video-title">
                                        Talking Tech and AI with Google CEO Sundar Pichai!
                                    </p>
                                </a>
                                <a href="https://www.youtube.com/c/mkbhd">
                                    <p className="video-author">
                                        Marques Brownlee
                                    </p>
                                </a>
                                <p className="video-stats">
                                    3.4M views &#183; 6 months ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="video-preview">
                        <div className="thumbnail-row">
                            <a href="https://www.youtube.com/watch?v=mP0RAo9SKZk">
                                <img className="thumbnail" src={logoY17} alt={'Error'}/>
                            </a>
                            <div>
                                9:02
                            </div>
                        </div>
                        <div className="overallDescriptChannel">
                            <div className="channel-picture">
                                <a href="https://www.youtube.com/c/markiplier">
                                    <img className="profile-picture" src={logoY18} alt={'Error'}/>
                                    <div className="toolTipChannel">
                                        <img src={logoY18} alt={'Error'}/>
                                        <div className="toolTipChannelInfo">
                                            <p className="nameToolTipInfo">Markiplier</p>
                                            <p className="subscrbToolTipInfo">33M subscribers</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="video-info">
                                <a href="https://www.youtube.com/watch?v=mP0RAo9SKZk">
                                    <p className="video-title">
                                        Try Not To Laugh Challenge #9
                                    </p>
                                </a>
                                <a href="https://www.youtube.com/c/markiplier">
                                    <p className="video-author">
                                        Markiplier
                                    </p>
                                </a>
                                <p className="video-stats">
                                    19M views &#183; 4 years ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="video-preview">
                        <div className="thumbnail-row">
                            <a href="https://www.youtube.com/watch?v=FgjPQQeTh1w">
                                <img className="thumbnail" src={logoY19} alt={'Error'}/>
                            </a>
                            <div>
                                11:29
                            </div>
                        </div>
                        <div className="overallDescriptChannel">
                            <div className="channel-picture">
                                <a href="https://www.youtube.com/c/SSSniperWolf">
                                    <img className="profile-picture" src={logoY20} alt={'Error'}/>
                                    <div className="toolTipChannel">
                                        <img src={logoY20} alt={'Error'}/>
                                        <div className="toolTipChannelInfo">
                                            <p className="nameToolTipInfo">SSSniperWolf</p>
                                            <p className="subscrbToolTipInfo">32M subscribers</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="video-info">
                                <a href="https://www.youtube.com/watch?v=FgjPQQeTh1w">
                                    <p className="video-title">
                                        Crazy Tik Toks Taken Moments Before DISASTER
                                    </p>
                                </a>
                                <a href="https://www.youtube.com/c/SSSniperWolf">
                                    <p className="video-author">
                                        SSSniperWolf
                                    </p>
                                </a>
                                <p className="video-stats">
                                    12M views &#183; 1 year ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="video-preview">
                        <div className="thumbnail-row">
                            <a href="https://www.youtube.com/watch?v=094y1Z2wpJg">
                                <img className="thumbnail" src={logoY21} alt={'Error'}/>
                            </a>
                            <div>
                                02:15
                            </div>
                        </div>
                        <div className="overallDescriptChannel">
                            <div className="channel-picture">
                                <a href="https://www.youtube.com/c/veritasium">
                                    <img className="profile-picture" src={logoY22} alt={'Error'}/>
                                    <div className="toolTipChannel">
                                        <img src={logoY22} alt={'Error'}/>
                                        <div className="toolTipChannelInfo">
                                            <p className="nameToolTipInfo">Veritasium</p>
                                            <p className="subscrbToolTipInfo">12M subscribers</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="video-info">
                                <a href="https://www.youtube.com/watch?v=094y1Z2wpJg">
                                    <p className="video-title">
                                        The Simplest Math Problem No One Can Solve - Collatz Conjecture
                                    </p>
                                </a>
                                <a href="https://www.youtube.com/c/veritasium">
                                    <p className="video-author">
                                        Veritasium
                                    </p>
                                </a>
                                <p className="video-stats">
                                    18M views &#183; 4 months ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="video-preview">
                        <div className="thumbnail-row">
                            <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                                <img className="thumbnail" src={logoY23} alt={'Error'}/>
                            </a>
                            <div>
                                31:15
                            </div>
                        </div>
                        <div className="overallDescriptChannel">
                            <div className="channel-picture">
                                <a href="https://www.youtube.com/c/CSDojo">
                                    <img className="profile-picture" src={logoY24} alt={'Error'}/>
                                    <div className="toolTipChannel">
                                        <img src={logoY24} alt={'Error'}/>
                                        <div className="toolTipChannelInfo">
                                            <p className="nameToolTipInfo">CSDojo</p>
                                            <p className="subscrbToolTipInfo">1M subscribers</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="video-info">
                                <a href="https://www.youtube.com/watch?v=86CQq3pKSUw">
                                    <p className="video-title">
                                        Kadane's Algorithm to Maximum Sum Subarray Problem
                                    </p>
                                </a>
                                <a href="https://www.youtube.com/c/CSDojo">
                                    <p className="video-author">
                                        CS Dojo
                                    </p>
                                </a>
                                <p className="video-stats">
                                    519K views &#183; 5 years ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="video-preview">
                        <div className="thumbnail-row">
                            <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                <img className="thumbnail" src={logoY25} alt={'Error'}/>
                            </a>
                            <div>
                                15:54
                            </div>
                        </div>
                        <div className="overallDescriptChannel">
                            <div className="channel-picture">
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <img className="profile-picture" src={logoY26} alt={'Error'}/>
                                    <div className="toolTipChannel">
                                        <img src={logoY26} alt={'Error'}/>
                                        <div className="toolTipChannelInfo">
                                            <p className="nameToolTipInfo">MrBeast6000</p>
                                            <p className="subscrbToolTipInfo">100M subscribers</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="video-info">
                                <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                    <p className="video-title">
                                        Anything You Can Fit In The Circle I’ll Pay For
                                    </p>
                                </a>
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <p className="video-author">
                                        MrBeast
                                    </p>
                                </a>
                                <p className="video-stats">
                                    141 views &#183; 1 years ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="video-preview">
                        <div className="thumbnail-row">
                            <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                <img className="thumbnail" src={logoY27} alt={'Error'}/>
                            </a>
                            <div>
                                15:54
                            </div>
                        </div>
                        <div className="overallDescriptChannel">
                            <div className="channel-picture">
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <img className="profile-picture" src={logoY28} alt={'Error'}/>
                                    <div className="toolTipChannel">
                                        <img src={logoY28} alt={'Error'}/>
                                        <div className="toolTipChannelInfo">
                                            <p className="nameToolTipInfo">MrBeast6000</p>
                                            <p className="subscrbToolTipInfo">100M subscribers</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="video-info">
                                <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                    <p className="video-title">
                                        Anything You Can Fit In The Circle I’ll Pay For
                                    </p>
                                </a>
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <p className="video-author">
                                        MrBeast
                                    </p>
                                </a>
                                <p className="video-stats">
                                    141 views &#183; 1 years ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="video-preview">
                        <div className="thumbnail-row">
                            <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                <img className="thumbnail" src={logoY29} alt={'Error'}/>
                            </a>
                            <div>
                                10:13
                            </div>
                        </div>
                        <div className="overallDescriptChannel">
                            <div className="channel-picture">
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <img className="profile-picture" src={logoY30} alt={'Error'}/>
                                    <div className="toolTipChannel">
                                        <img src={logoY30} alt={'Error'}/>
                                        <div className="toolTipChannelInfo">
                                            <p className="nameToolTipInfo">RealLifeLore</p>
                                            <p className="subscrbToolTipInfo">6M subscribers</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="video-info">
                                <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                    <p className="video-title">
                                        Why Planes Don't Fly Over Tibet
                                    </p>
                                </a>
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <p className="video-author">
                                        RealLifeLore
                                    </p>
                                </a>
                                <p className="video-stats">
                                    6M views &#183; 1 years ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="video-preview">
                        <div className="thumbnail-row">
                            <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                <img className="thumbnail" src={logoY31} alt={'Error'}/>
                            </a>
                            <div>
                                13:17
                            </div>
                        </div>
                        <div className="overallDescriptChannel">
                            <div className="channel-picture">
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <img className="profile-picture" src={logoY32} alt={'Error'}/>
                                    <div className="toolTipChannel">
                                        <img src={logoY32} alt={'Error'}/>
                                        <div className="toolTipChannelInfo">
                                            <p className="nameToolTipInfo">ThenX</p>
                                            <p className="subscrbToolTipInfo">7M subscribers</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="video-info">
                                <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                    <p className="video-title">
                                        The SECRET to Super Human STRENGTH
                                    </p>
                                </a>
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <p className="video-author">
                                        ThenX
                                    </p>
                                </a>
                                <p className="video-stats">
                                    20M views &#183; 3 years ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="video-preview">
                        <div className="thumbnail-row">
                            <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                <img className="thumbnail" src={logoY33} alt={'Error'}/>
                            </a>
                            <div>
                                7:53
                            </div>
                        </div>
                        <div className="overallDescriptChannel">
                            <div className="channel-picture">
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <img className="profile-picture" src={logoY34} alt={'Error'}/>
                                    <div className="toolTipChannel">
                                        <img src={logoY34} alt={'Error'}/>
                                        <div className="toolTipChannelInfo">
                                            <p className="nameToolTipInfo">Business Insider</p>
                                            <p className="subscrbToolTipInfo">6M subscribers</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="video-info">
                                <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                    <p className="video-title">
                                        How The World's Largest Cruise Ship Makes 30,000 Meals Every Day
                                    </p>
                                </a>
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <p className="video-author">
                                        Business Insider
                                    </p>
                                </a>
                                <p className="video-stats">
                                    14 views &#183; 1 years ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="video-preview">
                        <div className="thumbnail-row">
                            <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                <img className="thumbnail" src={logoY35} alt={'Error'}/>
                            </a>
                            <div>
                                4:10
                            </div>
                        </div>
                        <div className="overallDescriptChannel">
                            <div className="channel-picture">
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <img className="profile-picture" src={logoY36} alt={'Error'}/>
                                    <div className="toolTipChannel">
                                        <img src={logoY36} alt={'Error'}/>
                                        <div className="toolTipChannelInfo">
                                            <p className="nameToolTipInfo">Destination Tips</p>
                                            <p className="subscrbToolTipInfo">273K subscribers</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="video-info">
                                <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                    <p className="video-title">
                                        Dubai's Crazy Underwater Train and Other Things #Only in Dubai
                                    </p>
                                </a>
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <p className="video-author">
                                        Destination Tips
                                    </p>
                                </a>
                                <p className="video-stats">
                                    3M views &#183; 1 years ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="video-preview">
                        <div className="thumbnail-row">
                            <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                <img className="thumbnail" src={logoY37} alt={'Error'}/>
                            </a>
                            <div>
                                4:51
                            </div>
                        </div>
                        <div className="overallDescriptChannel">
                            <div className="channel-picture">
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <img className="profile-picture" src={logoY38} alt={'Error'}/>
                                    <div className="toolTipChannel">
                                        <img src={logoY38} alt={'Error'}/>
                                        <div className="toolTipChannelInfo">
                                            <p className="nameToolTipInfo">TED-Ed</p>
                                            <p className="subscrbToolTipInfo">17M subscribers</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="video-info">
                                <a href="https://www.youtube.com/watch?v=yXWw0_UfSFg">
                                    <p className="video-title">
                                        What would happen if you didn’t drink water? - Mia Nacamulli
                                    </p>
                                </a>
                                <a href="https://www.youtube.com/user/MrBeast6000">
                                    <p className="video-author">
                                        TED-Ed
                                    </p>
                                </a>
                                <p className="video-stats">
                                    12M views &#183; 5 years ago
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YouTubeClone;