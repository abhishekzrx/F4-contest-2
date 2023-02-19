
import './App.css';
import Data from './Data';
import Card from './Card';

function createCrad(Data){
  return(<Card 
     key={Data.id}
   userId={Data.userId}
   Title={Data.title}
  />)
}


function App() {
  //console.log(Data)
   //console.log(Data[4])
   //console.log(Data[4].title)

  return (
     <div className='conatiner'>
      <input type="text" placeholder='search by id or userId'/><br/>
       {Data.map(createCrad)}
 {/* <Card
           userId={Data[0].userId}
           title={Data[0].title}
        />
        <Card
           userId={Data[1].userId}
           title={Data[1].title}
        />
        <Card
           userId={Data[2].userId}
           title={Data[2].title}
        /> */}



      </div>
  
  );

  }

export default App;
