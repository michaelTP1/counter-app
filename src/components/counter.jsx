import React, { Component } from "react";

class Counter extends Component {
 

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  // en js los métodos son objetos, si queremos llamar a this necesitamos hacer un bindeo para que el método pueda acceder a las variables globales, y guardar la instancia creada en el método
  //   constructor(){
  //       super();
  //       this.handleIncrement=this.handleIncrement.bind(this);
  //   }

  render() {
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter) }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={()=>this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  //haciendo esto (()=>)conseguimos que el this dentro del método sea el mismo que ene de la clase, para que react actualize los campos debemos llamar a this.setState, que a su vez llamará a render()
  //sólo cambiarán los datos modificados, el resti sigue igual
 

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
