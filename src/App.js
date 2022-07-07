import React from 'react'
import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Update from './Update'



function App() {

   
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          {//exact makes sure the path is the right one we're looking for and not just included in the url
          }
          <Route exact path='/'>
          <Route path="" element={<Home />} /> 
          </Route>
          <Route path='/compose'>
          <Route path="" element={<Create />} /> 
          </Route>
          <Route path='/update/:id'>
          <Route path="" element={<Update />} /> 
          </Route>
          <Route path='/blogs/:id'>
          <Route path="" element={<BlogDetails />} /> 
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
