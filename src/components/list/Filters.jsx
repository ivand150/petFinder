import React from 'react';
import './Filters.css';
import { requestAnimals } from '../../actions/actions';
import store from '../../stores/principal-store';
import Button from 'react-bootstrap/Button';

function Filters({ type }) {
	const object = {
		age: ['baby', 'young', 'adult', 'senior'],
		gender: ['female', 'male', 'unknown']
	};

	function updateUrlObject(event, animalProperty, urlObject) {
		if (event.target.checked) {
			urlObject[animalProperty].push(`${event.target.value}`);
		} else {
			urlObject[animalProperty] = urlObject[animalProperty].filter(
				(element) => {
					return element !== `${event.target.value}`;
				}
			);
		}
	}

	function applyFilters(urlObject, type) {
		requestAnimals(type, urlObject.breed, urlObject.gender, urlObject.age);
		window.history.replaceState(
			null,
			'',
			`/list?type=${type}&age=${urlObject.age.join(
				','
			)}&gender=${urlObject.gender.join(',')}`
		);
	}

	return (
		<>
			<section className="filter-container">
				<div className="horizontal-container">
					<ul className="ks-cboxtags">
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
												updateUrlObject(event, 'age', store.getUrlFilter());
											}}
										></input>
										<label htmlFor="checkboxOne">{option}</label>
									</li>
								);
							})}
					</ul>

					<ul className="ks-cboxtags">
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
												updateUrlObject(event, 'gender', store.getUrlFilter());
											}}
										></input>
										<label htmlFor="checkboxOne">{option}</label>
									</li>
								);
							})}
					</ul>
				</div>
				<Button
					variant="primary"
					className="button-apply"
					onClick={() => {
						applyFilters(store.getUrlFilter(), type);
					}}
				>
					Apply filters
				</Button>
			</section>
		</>
	);
}

export default Filters;
