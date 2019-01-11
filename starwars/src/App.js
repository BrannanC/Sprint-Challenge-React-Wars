import React, { Component } from 'react';
import './App.css';
import './components/StarWars.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
    this.getFilmTitles();
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getFilmTitles = () => {
    this.state.starwarsChars.map((character, charIdx) => {
      character.films.map((URL, i) => {
        fetch(URL)
        .then(res => {
          return res.json();
        })
        .then(data => {
          let newChars = [...this.state.starwarsChars];
          newChars.charIdx.i = data.title;
          console.log(data.title);
          // this.setState({
          //   starwarsChars: [...prevState.starwarsChars],

          // })
        })
        .catch(err => {
          throw new Error(err);
        });
      });
    })
  }

  render() {
    console.log()
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList 
          characters={this.state.starwarsChars} 
          getFilm={this.getFilm}
        />
      </div>
    );
  }
}

export default App;
