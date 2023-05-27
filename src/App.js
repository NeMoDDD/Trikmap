import classes from './components/footer/Footer.module.css'
import './App.css';
import Header from './components/header/Header'; 
import Content from './components/content/Content'
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className={classes.container}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
