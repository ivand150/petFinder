import { Store } from './principal-store';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

jest.mock('../dispatcher/dispatcher');

describe('Store functions', () => {
	let store;
	beforeEach(() => {
		store = new Store();
	});

	test('should be defined', () => {
		expect(store).toBeDefined();
	});

	describe('getToken', () => {
		test('should return _token', () => {
			//arrange
			store.setToken('123456');
			//act
			const response = store.getToken();
			//assert
			expect(response).toBe('123456');
		});
	});

	describe('getAnimal', () => {
		test('should return _animal', () => {
			//arrange
			store.setAnimal({ name: 'test' });
			//act
			const response = store.getAnimal();
			//assert
			expect(response).toEqual({ name: 'test' });
		});
	});

	describe('getAnimals', () => {
		test('should return _animals', () => {
			//arrange
			store.setAnimals([{ name: 'test' }, { name: 'test2' }]);
			//act
			const response = store.getAnimals();
			//assert
			expect(response).toEqual([{ name: 'test' }, { name: 'test2' }]);
		});
	});

	describe('removeLastComma', () => {
		test('should remove last comma', () => {
			//arrange
			const word = 'test,';
			//act
			const response = store.removeLastComma(word);
			//assert
			expect(response).toBe('test');
		});

		test('should not remove last comma if there is no comma', () => {
			//arrange
			const word = 'test';
			//act
			const response = store.removeLastComma(word);
			//assert
			expect(response).toBe('test');
		});
	});

	describe('addEventListener', () => {
		test('should return test changed to "Event listened"', () => {
			//arrange
			let test = '';
			function callback() {
				test = 'Event listened';
			}
			//act
			store.addEventListener(callback);
			store.emitChange();
			//assert
			expect(test).toBe('Event listened');
		});

		describe('removeEventListener', () => {
			test('should return test without changes', () => {
				//arrange
				let test = '';
				function callback() {
					test = 'Event listened';
				}
				//act
				store.addEventListener(callback);
				store.removeEventListener(callback);
				store.emitChange();
				//assert
				expect(test).toBe('');
			});
		});

		describe('dispatcher.register: REQUEST_TOKEN', () => {
			test('should change _token from store and put it in testToken', () => {
				//arrange
				let testToken = '';
				function callback() {
					testToken = store.getToken();
				}
				//act
				store.addEventListener(callback);
				dispatcher.dispatch.mockImplementationOnce(() => {
					return {
						type: actionTypes.REQUEST_TOKEN,
						payload: '123456'
					};
				});
				//assert
				expect(testToken).toBe('123456');
			});
		});

		describe('dispatcher.register: REQUEST_ANIMAL', () => {
			test('should change _animal from store and put it in testAnimal', () => {
				//arrange
				let testAnimal = {};
				function callback() {
					testAnimal = store.getAnimal();
				}
				//act
				store.addEventListener(callback);
				dispatcher.dispatch({
					type: actionTypes.REQUEST_ANIMAL,
					payload: { name: 'cat' }
				});
				//assert
				expect(testAnimal).toEqual({ name: 'cat' });
			});

			describe('dispatcher.register: REQUEST_ANIMALS', () => {
				test('should change _animals from store and put it in testAnimals', () => {
					//arrange
					let testAnimals = [];
					function callback() {
						testAnimals = store.getAnimals();
					}
					//act
					store.addEventListener(callback);
					dispatcher.dispatch({
						type: actionTypes.REQUEST_ANIMALS,
						payload: [{ name: 'cat' }]
					});
					//assert
					expect(testAnimals).toEqual([{ name: 'cat' }]);
				});
			});

			describe('dispatcher.register: default', () => {
				test('should change _animals from store and put it in testAnimals', () => {
					//arrange
					let testVar = '';
					function callback() {
						testVar = store.getTestVar();
					}
					//act
					store.addEventListener(callback);
					dispatcher.dispatch({
						type: 'default option'
					});
					//assert
					expect(testVar).toBe('break');
				});
			});
		});
	});
});
