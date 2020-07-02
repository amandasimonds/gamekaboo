import React from "react";
import "../styles/main.scss"
import CommunityImg from "../img/aidan-howe.jpg"

const communityBox = (props) => (
    <div className="section-community">

        <div className="row">
            <div className="col-1-of-2">
                <span className="heading-2">Join our community and contribute your own content!</span>
            </div>

            <div className="col-1-of-2">
                <img className="section-community--img" src={CommunityImg} alt="Community Img"></img>
            </div>
        </div>

    </div>
)

export default communityBox