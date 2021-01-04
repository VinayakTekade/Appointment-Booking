import "./assets/css/App.css";
import NavBar from "./components/NavBar";
import Greeting from "./components/Greeting";
import Information from "./components/Information";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Greeting />
      <Information />
      <Footer />
    </div>
  );
}

export default Home;
