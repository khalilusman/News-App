import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
 
    <Router>
      <NavBar />
      <Routes>
        <Route path="/general" element={<News key='general' pageSize={9} country='us' category='general' />} />
        <Route path="/business" element={<News key='business' pageSize={9} country='us' category='business' />} />
        <Route path="/entertainment" element={<News key='entertainment' pageSize={9} country='us' category='entertainment' />} />
        <Route path="/health" element={<News key='health' pageSize={9} country='us' category='health' />} />
        <Route path="/science" element={<News key='science' pageSize={9} country='us' category='science' />} />
        <Route path="/sports" element={<News key='sports' pageSize={9} country='us' category='sports' />} />
        <Route path="/technology" element={<News key='technology' pageSize={9} country='us' category='technology' />} />
      </Routes>
    </Router>

    //  <NavBar />
    //  <News pageSize={9} country = 'us' category = 'sports'/> 
     
    
  );
}

export default App;
