import React from "react";
import "./styles.scss";

import { Footer, Explore, Connect, MainPage} from "../../components";

const Home = () => {
  return (
    <React.Fragment>
      <MainPage>      
        <h2> Home Page </h2>
      </MainPage>
      <Connect/>
      <Explore/>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
