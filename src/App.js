import React from 'react';
import './styles/main.scss';
import Layout from "./layout"
import LandingPage from "./containers/LandingPage"
import {Route} from "react-router-dom"

function App() {
  return (
    <Layout>
          <Route path ="/" component={LandingPage}/>
    </Layout>
  );
}

export default App;
