import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Card />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
