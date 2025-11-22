import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import LoadingScreen from "../../components/loading/LoadingScreen";
import "./HomeComponent.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isFadingOut: false,
    };
  }

  componentDidMount() {
    // Show loading screen for 2.5 seconds, then fade out
    this.loadingTimeout = setTimeout(() => {
      this.setState({ isFadingOut: true });
      // Remove loading screen after fade animation completes
      this.fadeTimeout = setTimeout(() => {
        this.setState({ isLoading: false });
      }, 600); // Match CSS transition duration
    }, 2500);
  }

  componentWillUnmount() {
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
    if (this.fadeTimeout) {
      clearTimeout(this.fadeTimeout);
    }
  }

  render() {
    const { isLoading, isFadingOut } = this.state;
    const { theme } = this.props;

    return (
      <>
        {isLoading && <LoadingScreen theme={theme} isFadingOut={isFadingOut} />}
        {!isLoading && (
          <div className="home-container">
            <div className="home-content">
              <div className="header-section">
                <Header theme={theme} />
              </div>
              <div className="greeting-section">
                <Greeting theme={theme} />
              </div>
              <div className="skills-section">
                <Skills theme={theme} />
              </div>
              <div className="footer-section">
                <Footer theme={theme} />
                <TopButton theme={theme} />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Home;
