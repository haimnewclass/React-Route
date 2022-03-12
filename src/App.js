import logo from './logo.svg';
import './App.css';
import {useParams, Route,Routes,Link ,BrowserRouter } from "react-router-dom"

import Pages from "./Pages"
import Page1 from "./Page1"
import Page2 from "./Page2"
import {p} from "./Page1"
import {Page3} from "./Page3";
import {useState} from 'react';


function App() {

  
 
function GetCom(){

  let {fo} = useParams();
  let {name} = useParams();
  console.log({fo});
  return (<Page1 itemId={fo} name={name}/>);
}

  function SneakerView() {    
    let  {name}   = useParams();
    let  {idd}   = useParams();
    let  {id}   = useParams();
    console.log({id})
    return (<div><h1>This is P Component{id}{name}</h1></div>);
  }  


  function  Loc(){

    // useState returns value,setFunction
    
    const [inputVal,setInputVal] = useState({ fName: "", lName: "" });

    const funcChange=(e)=>{
      console.log(e.target.value);
      setInputVal({ fName: e.target.value, lName: "" });
    }
    //let id = useParams
    return (<div><h1>This is P Component . Val:{inputVal.fName}
      <input onChange={funcChange}/>
      </h1></div>);
  }

   const Loc2 = (props)=> (<div><h1>This is Loc 2 Component {console.log()}
   
   
   
   </h1></div>);
  


  


  return (
    <div className="App">123
 
 <Link  to={"page1"}>GotoPage1</Link>
 <Link  to={"/Loc2/333/Rafi"}>GotoLoc2</Link>  
       <Routes>         
       <Route  path='/' element={<Page1/>}/>
       <Route  path='/ro/:fo/:name' element={<GetCom/>}/>
       <Route  path='/page1/:id' element={<Page2/>}/>       
       <Route  path='/3' element={<Page3/>}/>       
       <Route  path='/pa' element={<Loc/>}/>       
       <Route  path='/Loc2/:id/:name' element={<SneakerView/>}/>       
      </Routes>      
    
      
    </div>
  );
}      

export default App;
