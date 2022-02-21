import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          ></Counter>
        ))}

        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset{" "}
        </button>
      </div>
    );
  }
}

export default Counters;
