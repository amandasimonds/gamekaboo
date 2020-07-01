import React from "react";
import "../styles/main.scss"

const about = (props) => (
    <div className="section-about">
        <div className="row">

            <div className="col-1-of-3">
                <div className="section-about__card">
                    <span className="heading-2">Shop for your favorite games</span>
                </div>
            </div>

            <div className="col-1-of-3">
                <div className="section-about__card">
                    <span className="heading-2">Discover new games and content</span>
                </div>
            </div>

            <div className="col-1-of-3">
                <div className="section-about__card">
                    <span className="heading-2">Connect to other gamers and artists that also love to play</span>
                </div>
            </div>

        </div>
    </div>
)

export default about