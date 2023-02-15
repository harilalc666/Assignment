import React from 'react'
import { useNavigate } from "react-router-dom";

function Details({person}) {
	const navigate = useNavigate();
	const home = () => {
		return navigate("/");
	}
	return (
		<>
			<div>
				<h1>Employee Details </h1>
				<ul>
                <li>{person.length > 0 ? `${person[0].id} - ${person[0].name} - ${person[0].job}` : ''}</li>
				</ul>
			</div>
			<button onClick={home}>
				Back to Home
			</button>
		</>
	)
}

export default Details;
