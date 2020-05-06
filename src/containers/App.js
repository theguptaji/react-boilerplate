import React, {Component} from 'react';
import { connect } from 'react-redux'
import 'tachyons';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll'
import './App.css';

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = (state) => {
  return {
    searchfield : state.searchRobots.searchfield,
    robots : state.requestRobots.robots,
    isPending : state.requestRobots.isPending,
    error : state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchUpdate: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}


class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }
  
  render() {
    const { searchfield , onSearchUpdate , robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return isPending ?
    <h1>Loading</h1> :
    (
        <div className='tc'>
          <h1>Robowars</h1>
          <SearchBar onSearchUpdate={onSearchUpdate}/>
          <Scroll>
            <CardList Robots={filteredRobots}/>
          </Scroll>
        </div>
    );
    
  }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
