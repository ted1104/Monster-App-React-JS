import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.componenent'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users}))
    // console.log('Hey im mounting')
  }

  handleChange = (e) =>{
    this.setState({ searchField : e.target.value })
  }

  render(){
    // console.log('render')
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
         <SearchBox 
          placeholder = 'Search monsters'
          handleChange = { this.handleChange }
         />
         <CardList
          monsters={filteredMonster}/> 

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
