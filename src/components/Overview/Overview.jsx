import "../Overview/Overview.css"
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import iconUp from "../../assets/images/icon-up.svg";
import iconDown from "../../assets/images/icon-down.svg";
function Overview(){
    return(
        <div className="Overview">
            <div className="Overview-container">
                <div className="Overview-box">
                    <div className="top">
                        <h3>Page Views</h3>
                        <img src={facebook} alt="" />
                    </div>
                    <div className="bottom">
                        <h4>87</h4>
                        <div>
                            <img src={iconUp} alt="" />
                            <span>3%</span>
                        </div>
                    </div>
                </div>

                <div className="Overview-box">
                    <div className="top">
                        <h3>Likes</h3>
                        <img src={facebook} alt="" />
                    </div>
                    <div className="bottom">
                        <h4>52</h4>
                        <div>
                            <img src={iconDown} alt="" />
                            <span style={{  color: "var(--color-youtube)" }}>2%</span>
                        </div>
                    </div>
                </div>

                <div className="Overview-box">
                    <div className="top">
                        <h3>Likes</h3>
                        <img src={instagram} alt="" />
                    </div>
                    <div className="bottom">
                        <h4>5462</h4>
                        <div>
                            <img src={iconUp} alt="" />
                            <span>2257%</span>
                        </div>
                    </div>
                </div>

                <div className="Overview-box">
                    <div className="top">
                        <h3>Profile Views</h3>
                        <img src={instagram} alt="" />
                    </div>
                    <div className="bottom">
                        <h4>52K</h4>
                        <div>
                            <img src={iconUp} alt="" />
                            <span>1375%</span>
                        </div>
                    </div>
                </div>

                <div className="Overview-box">
                    <div className="top">
                        <h3>Retweets</h3>
                        <img src={twitter} alt="" />
                    </div>
                    <div className="bottom">
                        <h4>117</h4>
                        <div>
                            <img src={iconUp} alt="" />
                            <span>303%</span>
                        </div>
                    </div>
                </div>

                <div className="Overview-box">
                    <div className="top">
                        <h3>Likes</h3>
                        <img src={twitter} alt="" />
                    </div>
                    <div className="bottom">
                        <h4>507</h4>
                        <div>
                            <img src={iconUp} alt="" />
                            <span>553%</span>
                        </div>
                    </div>
                </div>

                <div className="Overview-box">
                    <div className="top">
                        <h3>Likes</h3>
                        <img src={youtube} alt="" />
                    </div>
                    <div className="bottom">
                        <h4>107</h4>
                        <div>
                            <img src={iconDown} alt="" />
                            <span style={{  color: "var(--color-youtube)" }}>19%</span>
                        </div>
                    </div>
                </div>

                <div className="Overview-box">
                    <div className="top">
                        <h3>Total Views</h3>
                        <img src={youtube} alt="" />
                    </div>
                    <div className="bottom">
                        <h4>1407</h4>
                        <div>
                            <img src={iconDown} alt="" />
                            <span style={{  color: "var(--color-youtube)" }}>12%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Overview