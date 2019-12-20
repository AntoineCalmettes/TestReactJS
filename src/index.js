import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Antoine" },
      { id: 2, nom: "Julien" },
      { id: 3, nom: "Marco" }
    ],
    compteur: 0
  };

  handleClick = () => {
    this.setState({ compteur: this.state.compteur + 1 });
    console.log(this.state);
  };
  render() {
    const title = "Liste des clients";
    this.state.clients.map(client => (
      <li class="list-group-item">
        {client.nom} <button class="btn btn-danger">X</button>
      </li>
    ));
    return (
      <div class="text-center pt-5">
        <h1>{title}</h1>
        <h3>{this.state.compteur}</h3>
        <button onClick={this.handleClick} class="btn btn-success mb-5">
          Click me
        </button>
        <ul class="list-group">
          {this.state.clients.map(client => (
            <li class="list-group-item">
              {client.nom} <button class="btn btn-danger">X</button>
            </li>
          ))}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un client" class="mr-2" />
          <button class="btn btn-primary">Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
