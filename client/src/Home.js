import "./assets/css/App.css";
import Greeting from "./components/Greeting";
import Information from "./components/Information";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="App">
      <Greeting />
      <Information />
      <Footer />
    </div>
  );
}

export default Home;
