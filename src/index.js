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
    nouveauClient: ""
  };
  // salut
  handleDelete = id => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(function(client) {
      return client.id === id;
    });
    clients.splice(index, 1);
    this.setState({ clients: clients });
  };

  handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    const client = { id: id, nom: nom };

    const clients = this.state.clients.slice();
    clients.push(client);

    this.setState({ clients: clients, nouveauClient: "" });
  };
  handleChange = event => {
    const value = event.currentTarget.value;

    this.setState({ nouveauClient: value });
  };
  render() {
    const title = "Liste des clients";

    return (
      <div class="text-center pt-5">
        <h1>{title}</h1>
        <ul class="list-group">
          {this.state.clients.map(client => (
            <li class="list-group-item">
              {client.nom}{" "}
              <button
                class="btn btn-danger"
                onClick={() => this.handleDelete(client.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.nouveauClient}
            onChange={this.handleChange}
            type="text"
            placeholder="Ajouter un client"
            class="mr-2"
          />
          <button class="btn btn-primary">Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
