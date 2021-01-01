import "./assets/css/App.css";
import NavBar from "./NavBar";
import Greeting from "./Greeting";
import Information from "./Information";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Greeting />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
