import React, { Component} from 'react';

class SearchResult extends Component {

  render() {
    return(
      <div>
        <h1>Resultado da busca</h1>
        <ul>
        {
          this.props.resultado.map(
            (item, index) => <li key={index}>{item.nome}</li>
          )
        }
        </ul>
      </div>
    )
  }
}

export default SearchResult;
