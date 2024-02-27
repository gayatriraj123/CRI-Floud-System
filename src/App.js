import './App.css';
import React from 'react';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
// import ReactDOM from 'react-dom';


function App(){
      return (
          <>
          <div className='container'>
              <Header/>
              <Main/>
              <Footer/>
          </div>
              
          </>
      )
  }
  
// function App() {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// }

export default App;

