import './index.css'

function Cardd(props){
     const {name, familya, email, select, number,tillar}=props.value
     return(
          <div className='boxes'>
          <h1>{name}, {familya}</h1>
          <p>{email}</p>
          <p>{select}</p>
          <p>{number}</p>
          <div class     Name="tillar">
               <h1>Gaplasha olaman:</h1>
               {
                    tillar.lenght>0 && tillar.map(function(value,index){
                         return (
                              <p >{value}</p>
                         )
                    })
               }
          </div>
          <button className='delet'>Delet</button>
          </div>
     )
};

export default Cardd;