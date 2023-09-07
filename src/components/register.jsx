import { useState } from "react";

function Register() {
	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	function handleChange(event) {
		setUser({ email: event.target.value, password: "" });
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div
			className="mx-auto border p-3 mt-5"
			style={{ minWidth: "300px", maxWidth: "600px" }}
		>
			<h4>Register</h4>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						onChange={handleChange}
						value={user.email}
						name="email"
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						onChange={handleChange}
						value={user.password}
						name="password"
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<div className="d-grid gap-2">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default Register;
