import React, {Component} from 'react';
// import { robots } from './robots';
import 'tachyons';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots : [],
      searchfield : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({robots: users})});
  }

  onSearchUpdate = (event) => {
      this.setState({searchfield : event.target.value})
  }
  
  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
    <h1>Loading</h1> :
    (
        <div className='tc'>
          <h1>Robowars</h1>
          <SearchBar onSearchUpdate={this.onSearchUpdate}/>
          <Scroll>
            <CardList Robots={filteredRobots}/>
          </Scroll>
        </div>
    );
    
  }
  }
  

export default App;
