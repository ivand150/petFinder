import React from 'react';
import './Filters.css';
import { requestAnimals } from '../../actions/actions';
import store from '../../stores/principal-store';

function Filters({ type }) {
	const object = {
		age: ['adult', 'young', 'baby', 'senior'],
		gender: ['female', 'male', 'unknown']
	};

	let urlString = {
		age: '',
		breed: '',
		gender: ''
	};

	function updateUrlObject(event, animalProperty, urlObject) {
		urlObject[animalProperty] = event.target.checked
			? urlObject[animalProperty] + `${event.target.value},`
			: urlObject[animalProperty].replace(`${event.target.value},`, '');
	}

	function applyFilters(urlObject, type) {
		for (const property in urlObject) {
			urlObject[property] = store.removeLastComma(urlObject[property]);
		}
		console.log('Aply filters clic');
		requestAnimals(type, urlObject.breed, urlObject.gender, urlObject.age);
		window.history.replaceState(
			null,
			'',
			`/list?type=${type}&breed=${urlObject.breed}&age=${urlObject.age}&gender=${urlObject.gender}`
		);
	}

	return (
		<>
			<section className="filter-container">
				<div className="horizontal-container">
					<ul class="ks-cboxtags">
						<p className="checkbox__text">Age</p>
						{object.age &&
							object.age.map((option, index) => {
								return (
									<li className="checkbox-li" key={index}>
										<input
											type="checkbox"
											id="checkboxOne"
											className="inputBox"
											key={option}
											value={option}
											onChange={(event) => {
												updateUrlObject(event, 'age', urlString);
											}}
										></input>
										<label htmlFor="checkboxOne">{option}</label>
									</li>
								);
							})}
					</ul>

					<ul class="ks-cboxtags">
						<p className="checkbox__text">Gender</p>
						{object.gender &&
							object.gender.map((option, index) => {
								return (
									<li className="checkbox-li" key={index}>
										<input
											type="checkbox"
											id="checkboxOne"
											className="inputBox"
											key={option}
											value={option}
											onChange={(event) => {
												updateUrlObject(event, 'age', urlString);
											}}
										></input>
										<label htmlFor="checkboxOne">{option}</label>
									</li>
								);
							})}
					</ul>
				</div>
				<button
					className="button-apply"
					onClick={() => {
						applyFilters(urlString, type);
						console.log(urlString);
					}}
				>
					Apply filters
				</button>
			</section>
		</>
	);
}

export default Filters;
