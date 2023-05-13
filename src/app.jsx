import React from 'react';
import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import About from "./components/about/about.component";
import Experience from "./components/experience/experience.component";
import Testimonials from "./components/testimonials/testimonials.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Services from "./components/services/services.component";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Navigation />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </>
    )
  }
}
