
import Cardd from './component/Cardd';
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [familya, setFamilya] = useState('');
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('uzb');
  const [number, setNumber] = useState('');
  const [tillar, setTillar] = useState([])
  const [users, setUsers] = useState([]);
  
  function tillarfunction(event){
  if(event.target.checked){
      let copy = [...tillar]
      copy.push(event.target.value)
      setTillar(copy);
    } else{
      let copy = [...tillar]
      copy = copy.filter(function(value){
        return value!=event.target.value
      })
      setTillar(copy);
    }
  }
  function btnQoshish(event){
    event.preventDefault();
    const user = {
      name,
      familya,
      email,
      select,
      number,
      tillar,
      id: Date.now(),
    }
    const copy = [...users];
    copy.push(user);
    setUsers(copy)
   
    setName('');
    setFamilya('')
    setEmail('')
    setSelect('')
    setNumber('')
    setTillar('')
  }
  return (
    <>
      <form>
        <div  className="box">
          <label>Ism</label>
          <input value={name} onChange={(e)=> {setName(e.target.value)}}  type="text" />
        </div>
        <div className="box">
          <label>Familya</label>
          <input type="text" value={familya} onChange={(e)=> {setFamilya(e.target.value)}} />
        </div>
        <div className="box">
          <label>Email</label>
          <input type="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} />
        </div>
        <div className="box-select">
          <label>Milatiz</label>
          <select value={select} onChange={(e)=>{setSelect(e.target.value)}} >
            <option style={{backgroundColor:'transparent'}} value="uzb">uzb</option>
            <option value="tjk">tjk</option>
            <option value="rus">rus</option>
            <option value="eng">eng</option>
          </select>
        </div>
        <div className="box">
          <label>Telefon nomer</label>
          <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
        </div>
        <div className="box-language">
          <p>Qaysi tillarni bilasz</p>
          <div className="box">
          <input id='uzbek' value='uzbek' onChange={tillarfunction} name='tillar' type="checkbox"/>
          <label htmlFor='uzbek'>Uzbek</label>
          </div>
          <div className="box"> 
          <input type="checkbox" onChange={tillarfunction} name='tillar' id='russia' value='russia'/>
          <label>Russia</label>
          </div>
          <div className="box">
          <input type="checkbox" onChange={tillarfunction} name='tillar' id='english' value='english'/>
          <label>English</label>
          </div>
          <div className="box">
          <input type="checkbox" onChange={tillarfunction} name='tillar' id='tadjik' value='tadjik'/>
          <label>Tadjik</label>
          </div>
          <div className="box">
          <input type="checkbox" onChange={tillarfunction} name='tillar' id='korea' value='korea'/>
          <label>Korea</label>
          </div>
        </div>
        <button onClick={btnQoshish} >Qo`shish</button>
        {
          users.length>0 && users.map(function(value,index){
            return(
              <Cardd user={value} key={index}/>
            )
          })
        }
      </form>
    </>
  )
}

export default App
