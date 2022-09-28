import './App.css';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='bg-success  bg-opacity-10'>
      <Home></Home>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
