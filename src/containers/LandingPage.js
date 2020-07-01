import React from "react";

import Header from "../components/Header"
import Footer from "../components/Footer";
import About from "../components/About";
import FeatureBox from "../components/FeatureBox"

const landingPage = (props) => (
    <div>
    <Header />
    <About/>
    <FeatureBox/>
    </div>
)

export default landingPage