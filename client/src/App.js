import {Box} from '@material-ui/core';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Components
import Header from './Components/Header';
import Home from './Components/Home/Home';
import CreateView from './Components/Post/CreateView';
import DetailView from './Components/Post/DetailView';
import UpdateView from './Components/Post/UpdateView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Box style={{marginTop: 64}}>
        <Routes>
          <Route exact path='/' element={<Home/>} /> 
          <Route exact path='/details' element={<DetailView/>} /> 
          <Route exact path='/create' element={<CreateView/>} /> 
          <Route exact path='/update' element={<UpdateView/>} /> 
        </Routes>  
      </Box>
     </BrowserRouter>
    </div>
  );
}

export default App;
