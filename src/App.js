
import './App.css';

function App() {
  const styleDiv = {
    textAlign: 'center',
  }
  const players = [
    {name: 'shohan', jersy: 10},
    {name: 'jamal', jersy: 7},
    {name: 'bitch', jersy: 13}

  ];
  return (
    <div style = {styleDiv}>
      <Person name = 'shohan' age = '23'></Person>
      <Person name = 'arif' age = '24'></Person>
      {
        players.map(player => <Player name = {player.name} jersy = {player.jersy}></Player> )
      }    
    </div>
    
  );
}


function Person(props) {
  console.log(props);
  return (
    <div className = "person">
      <h1>Name: {props.name}</h1>
      <h3>age: {props.age}</h3>
    </div>
    
  );
}

function Player(props){
  console.log(props);
  return(
    <div className = "person">
      <h1>Name: {props.name}</h1>
      <h3>Jersy: {props.jersy}</h3>
    </div>
  );
}
export default App;
