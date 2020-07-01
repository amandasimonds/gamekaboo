import React from "react";
import "../styles/main.scss"

const header = (props) => (
    <div className="header">
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">
                    gamekaboo
                </span>
                <span className="header-primary--sub">
                    a community for everything games
                </span>
            </h1>
            <div className="controller-shape"></div>
        </div>
    </div>
)

export default header