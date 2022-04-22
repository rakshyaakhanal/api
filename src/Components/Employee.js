// import React, { useState, useEffect } from 'react';

// const Employee = () => {
// 	const [data, setData] = useState();

// 	const getApi = () => {
// 		fetch('https://jsonplaceholder.typicode.com/posts/7')
// 			.then((response) => response.json())
// 			.then((json) => {
// 				console.log(json);
// 				setData(json);
// 			});
// 	};

// 	return (
// 		<div className='mt-5 d-flex' justify-content-center>
// 			<button onClick={getApi}>FETCH API</button>
// 			<pre>{JSON.stringify(data, null, 2)}</pre>
// 		</div>
// 	);
// };

// export default Employee;

// import React, { useState, useEffect } from 'react';

// const Employee = () => {
// 	const [data, setData] = useState();

// 	useEffect(() => {
// 		fetch('https://jsonplaceholder.typicode.com/posts/1')
//         // fetch('https://v2.jokeapi.dev/joke/Any')
// 			.then((response) => response.json())
// 			.then((json) => {
// 				console.log(json);
// 				setData(json);
// 			});
// 	}, []);

// 	return (
// 		<div className='mt-5 d-flex' justify-content-center>
// 			<pre>{JSON.stringify(data, null, 2)}</pre>
// 			{/* <pre>{JSON.stringify(data.setup, null, 2)}</pre> */}
//             {/* <h1>{data?.setup} : {data?.delivery} : {data?.id}</h1> */}
// 		</div>
// 	);
// };

// export default Employee;

import React, { useState, useEffect } from "react";

const Employee = () => {
	const [data, setData] = useState();
	const [inputs, setInputs] = useState();

	//Get Method
	const getApi = () => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				setData(json);
			});
	};

	//Post Method
	const postApi = async() => {
		await fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			body: JSON.stringify({
				title: inputs.title,
				body: inputs.body,
				userId: parseInt(inputs.userId),
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	};

	const handleChange = (event) => {
		event.persist();
		setInputs((input) => ({
			...inputs,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(inputs);
	};

	return (
		<div className="mt-5 d-flex">
			<button onClick={getApi}>FETCH API FOR GET</button>
			<button onClick={postApi}>FETCH API FOR POST</button>
			<div>
				<ul>
					{data &&
						data.map((item) => (
							<li key={item.id}>
								{item.userId}, {item.title}
							</li>
						))}
				</ul>
			</div>

			<div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="title"
						placeholder="Title"
						onChange={handleChange}
					/>
					<br />
					<br />
					<input
						type="text"
						name="body"
						placeholder="Body"
						onChange={handleChange}
					/>
					<br />
					<br />
					<input
						type="number"
						name="userId"
						placeholder="UserID"
						onChange={handleChange}
					/>
					<br />
					<br />
					<input
						type="submit"
						value="submit"
						onChange={handleChange}
					/>
				</form>
			</div>
		</div>
	);
};

export default Employee;
