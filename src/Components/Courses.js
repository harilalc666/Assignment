import React from 'react'
import { useNavigate } from "react-router-dom";

function Courses({person}) {
	const navigate = useNavigate();
	const home = () => {
		return navigate("/");
	}
	return (
		<>
			<div className="card " >
				<h1>Employee Details </h1>
				<ul className="list-group list-group-flush">
                <li>{person.length > 0 ? `${person[0].id} - ${person[0].name} - ${person[0].job}` : ''}</li>
				</ul>
			</div>
			<button className="btn btn-success" onClick={home}>
				Back to Home
			</button>
		</>
	)
}

export default Courses;
