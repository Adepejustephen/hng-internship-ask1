import { Route, Routes } from 'react-router-dom';
import { Footer} from './components';
import { Contact, Home } from "./pages";




function App() {
  return (
    <div className='App'>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
