import Estate from "./Estate/Estate";
import Action from "./action/Action";
import Digital from "./digital/Digital";
import Header from "./header/Header";
import Inquery from "./inquire/Inquery";
import Mind from "./mind/Mind";
import Pharma from "./pharma/Pharma";
import Property from "./property/Property";
import Section from "./section/Section";
import Services from "./services/Services";
import Question from "./question/Question";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Section />
      <Estate />
      <Services />
      <Digital />
      <Property />
      <Inquery />
      <Action/>
      <Mind/>
      <Pharma/>
      <Question/>
      <Contact/>
      <Footer/>


    </>
  );
};

export default App;
