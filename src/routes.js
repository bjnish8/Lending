import React from "react";
import { Home} from "./views";
import {NavBar} from "./components"

const BaseRouter = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
    </React.Fragment>
  );
};

export default BaseRouter;
