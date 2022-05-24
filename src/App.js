import './App.css';
import Content from './components/Content/Content';
import Features from './components/Features/Features';
import NavBar from './components/NavBar/NavBar';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <NavBar/>
      <Content/>
      <Features/>
      <Section/>
      <Footer />
    </div>
  );
}

export default App;
