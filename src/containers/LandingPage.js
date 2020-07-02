import React from "react";

import Header from "../components/Header"
import Footer from "../components/Footer";
import About from "../components/About";
import FeatureBox from "../components/FeatureBox"
import CommunityBox from "../components/CommunityBox"

const landingPage = (props) => (
    <div>
    <Header />
    <About/>
    <FeatureBox/>
    <CommunityBox/>
    </div>
)

export default landingPage