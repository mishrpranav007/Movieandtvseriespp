import React ,{ Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';
/////import Text1 from './components/Text1';
import Navbar from './components/layout/Navbar';
import Landing from './components/home/Landing';
import store from './store';

class App extends Component{
  render()
  {
    return(
       <Provider store = {store}>
            <Navbar />
            <Landing />
            
       </Provider>
    )
  }
}
export default App;
