import React from 'react';
import './Filters.css';
import { requestAnimals } from '../../actions/actions';
import store from '../../stores/principal-store';
import Button from 'react-bootstrap/Button';

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

	return (
		<>
			<section className="filter-container">
				<div className="horizontal-container">
					<div id="filter-age" className="filter">
						{object.age &&
							object.age.map((option) => {
								return (
									<label>
										<input
											type="checkbox"
											key={option}
											value={option}
											onChange={(event) => {
												urlString.age = event.target.checked
													? urlString.age + `${event.target.value},`
													: urlString.age.replace(`${event.target.value},`, '');
											}}
										/>
										{option}
									</label>
								);
							})}
					</div>

					<div id="filter-breed" className="filter">
						{object.breed &&
							object.breed.map((option) => {
								return (
									<label>
										<input type="checkbox" key={option} value={option} />
										{option}
									</label>
								);
							})}
					</div>

					<div id="filter-gender" className="filter">
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
				<Button
					variant="primary"
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
					Apply Filters
				</Button>
			</section>
		</>
	);
}

export default Filters;
