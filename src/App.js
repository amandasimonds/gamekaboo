import React from 'react';
import './App.scss';
import Layout from "./layout"
import {Route} from "react-router-dom"

function App() {
  return (
    <Layout>
          <Route path ="/" component={Layout}/>
    </Layout>
  );
}

export default App;
