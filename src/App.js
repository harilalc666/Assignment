import React, { useState } from 'react';
import { Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage"
import Courses from "./Components/Courses"


function App() {

  const list = [
    {id:101, name:"harilal", job:"Developer"}, 
    {id:102, name:"Rakesh", job:"Desinger"}, 
    {id:103, name:"Prakash", job:"Salesman"}, 
    {id:104, name:"Vishal", job:"Manager"}, 
    {id:105, name:"Vishnu", job:"HR"}
  ]

  const [data, setData] = useState(list)
  const [person, setPerson] = useState({});


	return (
		<>
				<Routes>
					<Route exact path="/" element={<Homepage data={data} person={person} setPerson={setPerson} />} />
					<Route exact path="/courses" element={<Courses person={person} />} />
				</Routes>
		</>
	);
}

export default App;
