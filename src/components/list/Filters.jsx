import React from 'react';
import './Filters.css';
import { requestAnimals } from '../../actions/actions';
import store from '../../stores/principal-store';

function Filters({ type }) {
	const object = {
		age: ['baby', 'young', 'adult', 'senior'],
		gender: ['female', 'male', 'unknown']
	};

	let urlString = {
		age: '',
		breed: '',
		gender: ''
	};

	return (
		<>
			<section className="filter-container">
				<div className="horizontal-container">
					<p>Age</p>
					<ul class="ks-cboxtags">
						{object.age &&
							object.age.map((option) => {
								return (
									<li className="checkbox-li">
										<input
											type="checkbox"
											id="checkboxOne"
											className="inputBox"
											key={option}
											value={option}
											onChange={(event) => {
												urlString.age = event.target.checked
													? urlString.age + `${event.target.value},`
													: urlString.age.replace(`${event.target.value},`, '');
											}}
										></input>
										<label for="checkboxOne">{option}</label>
									</li>
								);
							})}
					</ul>

					<div id="filter-gender" className="filter">
						<p>Gender</p>
						{object.gender &&
							object.gender.map((option) => {
								return (
									<label>
										<input
											type="checkbox"
											key={option}
											value={option}
											onChange={(event) => {
												urlString.gender = event.target.checked
													? urlString.gender + `${event.target.value},`
													: urlString.gender.replace(
															`${event.target.value},`,
															''
													  );
											}}
										/>
										{option}
									</label>
								);
							})}
					</div>
				</div>

				<button
					className="button-apply"
					onClick={() => {
						for (const property in urlString) {
							urlString[property] = store.removeLastComma(urlString[property]);
						}
						console.log('Aply filters clic');
						requestAnimals(
							type,
							urlString.breed,
							urlString.gender,
							urlString.age
						);
						window.history.replaceState(
							null,
							'',
							`/list?type=${type}&breed=${urlString.breed}&age=${urlString.age}&gender=${urlString.gender}`
						);
					}}
				>
					Aply filters
				</button>
			</section>
		</>
	);
}

export default Filters;
