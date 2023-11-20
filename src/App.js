import logo from './logo.svg';
import './App.css';
import Table from './Table'
import List from './list'
import Tableclass from './Tableclass'
import Listclass from './Listclass'
import Greet from './setstate'

function App() {

  const userInfo=[
    {
      name:"Aravind",
      age:23,
      degree:"Bsc"
    },
    {
      name:"Gokul",
      age:23,
      degree:"Bsc"
    },
    {
      name:"Usuf",
      age:23,
      degree:"Bsc"
    },
    {
      name:"Rahul",
      age:23,
      degree:"B.E."
    }
  ]



  const phones=[
    {
      name:"Redmi"
    },
    {
      name:"Samsung"
    },
    {
      name:"Nokia"
    },
    {
      name:"Apple"
    },
    {
      name:"Oneplus"
    },

  ]

  const userInfor=[
    {
      name:"Aravind",
      age:23,
      degree:"Bsc"
    },
    {
      name:"Gokul",
      age:23,
      degree:"Bsc"
    },
    {
      name:"Usuf",
      age:23,
      degree:"Bsc"
    },
    {
      name:"Rahul",
      age:23,
      degree:"B.E."
    }
  ]


  const phones1=[
    {
      name:"Redmi"
    },
    {
      name:"Samsung"
    },
    {
      name:"Nokia"
    },
    {
      name:"Apple"
    },
    {
      name:"Oneplus"
    },

  ]



  return (
    <div className="App">
     <Table data={userInfo}/>
     
     <List brand={phones}/>
     <Tableclass detail={userInfor}/>
      <Listclass detail1={phones1}/>
      <Greet />
    </div>
  );
}

export default App;
