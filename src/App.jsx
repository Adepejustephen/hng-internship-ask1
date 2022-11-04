import { Route, Routes } from 'react-router-dom';
import { Footer} from './components';
import { Home } from './pages/home';



function App() {
  return (
    <div className='App'>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
