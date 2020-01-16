import React, { Component } from 'react';
import './App.css';
import Form from './component/Form';
import SearchResult from './component/SearchResult'

class App extends Component {

  state = {
    cliques: 0,
    resultado: []
  }

  searchResult = () => {
    const resultado = [
      { nome: 'Victor'},
      { nome: 'Amanda'},
      { nome: 'Jeff'}
    ];
    this.setState({
      resultado
    })
  }

  addClick = () => {
    console.log('Clicou no botao')
    const cliques = this.state.cliques + 1;
    this.setState({
      cliques
    })
  }

  render() {
    return (
      <div className="App">
        <Form submitButtonClick={this.searchResult} />
        <Form submitButtonClick={this.addClick} />
        <SearchResult resultado={this.state.resultado} />
      </div>
    )
  }
}

export default App;
