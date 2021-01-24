import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users}))
    // console.log('Hey im mounting')
  }

  render(){
    // console.log('render')
    return (
      <div className="App">
         <CardList monsters={this.state.monsters}/> 

         {/* <CardList name = "teddy">
         { this.state.monsters.map(monster => <h1 key = {monster.id}> { monster.name} </h1>) }
         </CardList> */}
        
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
