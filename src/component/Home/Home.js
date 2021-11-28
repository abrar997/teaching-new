import React, { Component } from "react";

// comp
import Footer from "../Footer/Footer";
import Company from "./Company/Company";
import ExploreCours from "./ExploreCours/ExploreCours";
import Free from "./Free/Free";
import Header from "./Header/Header";
import Inday from "./Inday/Inday";
import Mind from "./Mind/Mind";
import NextStep from "./NextStep/NextStep";
import Services from "./Services/Services";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Company />
        <Services />
        <Free />
        <Inday />
        <NextStep />
        <ExploreCours />
        <Mind />
        <Footer />
      </div>
    );
  }
}

export default Home;
