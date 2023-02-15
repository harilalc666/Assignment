import React from 'react'
import { useNavigate } from "react-router-dom";

function Homepage({data, person, setPerson}) {
	const navigate = useNavigate();

	function handleChange(id) {

        const employeeDetail = data.find((item)=> item.id === id)
        console.log(employeeDetail);
        setPerson([employeeDetail]);
		return navigate("/details");
	}
	return (
		<>
			<div>
				<h1>Hello Employees</h1>
                <div>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.job}</td>
                    <button className="btn btn-success"
						onClick={()=> handleChange(item.id)}>Explore Details
					</button>
                    </tr>
                ))}
            </tbody>
                </div>
            </div>
		</>
	)
}

export default Homepage;
