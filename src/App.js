import React,{useState} from 'react';
import './App.css';
import Icon from './components/Icon';

// toastify import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//bootstrap import
import {Card,CardBody,Container,Button,Col,Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const itemArray =new Array(9).fill("empty")

const App=()=> {

  //usestate
  const [isCross,setIsCross]=useState(false)
  const [winMessage,setWinMessage]=useState("")

  const reloadGame=()=>{
    //
  }
  const checkIsWinner=()=>{
    //
  }
  const changeItem=itemNumber=>{
    //
  }


  return (
    <div className="App">
     
        
        <Icon name="cross"/>
       
      
    </div>
  );
}

export default App;
