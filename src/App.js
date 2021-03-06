import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  constructor(){
    super();
    //constructor
  }

  componentDidMount(){
    //se ejecuta en el momento en el que se carga la vista, para llamadas a bases de datos, etc (Ajax)
    //this.setState({loquesea});
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    //...  crea una copia de counters
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    var totalProducts=0;
    this.state.counters.forEach(counter => {
      totalProducts+=counter.value;
    });
    return (
      <React.Fragment>
        
        <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}
        totalProducts={totalProducts}
        />
        <main className="container">
          <Counters
          counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
