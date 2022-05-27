/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Berita from "./Berita";
import Layout from "./Layout";
import MyClass from "./MyClass";
import MyFunc from "./MyFunc";
import NewsFeed from "./NewsFeed";
function App() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => setToggle(currentState => !currentState)
  return (
    <Layout>
      <button onClick={handleToggle}>Toggle</button>
      {/* {toggle && <MyClass/>} */}
      {toggle && <Berita />}
      {/* <NewsFeed/> */}
    </Layout>
  );
}

export default App;
