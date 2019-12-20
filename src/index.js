import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Antoine" },
      { id: 2, nom: "Julien" },
      { id: 3, nom: "Marco" }
    ]
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
