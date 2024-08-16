import "../Followers/Followers.css"
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import iconUp from "../../assets/images/icon-up.svg";
import iconDown from "../../assets/images/icon-down.svg";
function Followers(){
    return (
        <div className="container">
            <section className="dashborad-body">
                <div className="box" style={{  borderColor: "var(--color-facebook)" }}>
                    <div className="box-top">
                        <img src={facebook}/>
                        <span>@nathanf</span>
                    </div>
                    <h2>1987</h2>
                    <p>Followers</p>
                    <div className="box-bottom">
                        <img src={iconUp} />
                        <span>12 Today</span>
                    </div>

                </div>

                <div className="box" style={{  borderColor: "var(--color-twitter)" }}>
                    <div className="box-top">
                        <img src={twitter}/>
                        <span>@nathanf</span>
                    </div>
                    <h2>1044</h2>
                    <p>Followers</p>
                    <div className="box-bottom">
                        <img src={iconUp} />
                        <span>99 Today</span>
                    </div>

                </div>


                <div className="box" style={{  borderColor: "var(--color-instagram)" }}>
                    <div className="box-top">
                        <img src={instagram}/>
                        <span>@realnathanf</span>
                    </div>
                    <h2>11K</h2>
                    <p>Followers</p>
                    <div className="box-bottom">
                        <img src={iconUp} />
                        <span>1099 Today</span>
                    </div>

                </div>


                <div className="box" style={{  borderColor: "var(--color-youtube)" }}>
                    <div className="box-top">
                        <img src={youtube}/>
                        <span>Nathan F.</span>
                    </div>
                    <h2>8239</h2>
                    <p>Subscribers</p>
                    <div className="box-bottom">
                        <img src={iconDown} />
                        <span style={{  color: "var(--color-youtube)" }}>144 Today</span>
                    </div>

                </div>

            </section>

            
        </div>
    )
}

export default Followers