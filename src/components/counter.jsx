import { Component } from "react";

class Counter extends Component {
	state = {
		count: 0
	};

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};

	decrement = () => {
		this.setState({ count: this.state.count - 1 });
	};

	render() {
		return (
			<div className="d-flex justify-content-center mt-3">
				<button onClick={this.increment} className="btn btn-primary">
					Increment
				</button>
				<h3 className="text-center mx-3">{this.state.count}</h3>
				<button onClick={this.decrement} className="btn btn-secondary">
					Decrement
				</button>
			</div>
		);
	}
}

export default Counter;
