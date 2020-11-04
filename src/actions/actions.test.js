import { requestToken, requestAnimal, requestAnimals } from './actions';
import dispatcher from '../dispatcher/dispatcher';

jest.mock('../dispatcher/dispatcher');

describe('actions functions', () => {
	describe('requestToken', () => {
		beforeEach(async () => {
			global.fetch = jest.fn().mockImplementation(() => {
				return Promise.resolve({
					json: jest.fn().mockReturnValue({ access_token: '1234' })
				});
			});
			await requestToken();
		});

		test('should call fetch with the url "https://api.petfinder.com/v2/oauth2/token"', () => {
			expect(fetch.mock.calls[0][0]).toBe(
				'https://api.petfinder.com/v2/oauth2/token'
			);
		});

		test('should call fetch once', () => {
			expect(fetch.mock.calls.length).toBe(1);
		});

		test('should call dispatch once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('action.payload should be "1234"', () => {
			expect(dispatcher.dispatch.mock.calls[0][0].payload).toBe('1234');
		});
	});

	describe('requestAnimal', () => {
		beforeEach(async () => {
			global.fetch = jest.fn().mockImplementation(() => {
				return Promise.resolve({
					json: jest.fn().mockReturnValue({ animal: { id: 12, name: 'cat' } })
				});
			});
			await requestAnimal(12);
		});

		test('should call fetch with the url "https://api.petfinder.com/v2/animals/animalId"', () => {
			expect(fetch.mock.calls[0][0]).toBe(
				`https://api.petfinder.com/v2/animals/12`
			);
		});

		test('should call fetch once', () => {
			expect(fetch.mock.calls.length).toBe(1);
		});

		test('should call dispatch once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('action.payload should be an object with id 12 and name "cat"', () => {
			expect(dispatcher.dispatch.mock.calls[0][0].payload).toEqual({
				id: 12,
				name: 'cat'
			});
		});
	});

	describe('requestAnimals', () => {
		beforeEach(async () => {
			global.fetch = jest.fn().mockImplementation(() => {
				return Promise.resolve({
					json: jest.fn().mockReturnValue({ animals: [{ name: 'cat' }] })
				});
			});
			await requestAnimals('cat', 'shorthair', 'male', 'young');
		});
		test('should call fetch with the url "https://api.petfinder.com/v2/animals/animalId"', () => {
			expect(fetch.mock.calls[0][0]).toBe(
				'https://api.petfinder.com/v2/animals?type=cat&breed=shorthair&gender=male&age=young'
			);
		});

		test('should call fetch once', () => {
			expect(fetch.mock.calls.length).toBe(1);
		});

		test('should call dispatch once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('action.payload should be an array with one element', () => {
			expect(dispatcher.dispatch.mock.calls[0][0].payload).toEqual([
				{ name: 'cat' }
			]);
		});
	});

	describe('Promise rejects', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() => {
				return Promise.reject();
			});
		});

		test('requestToken should return null if promise rejected', async () => {
			expect(await requestToken()).toBe(null);
		});

		test('requestAnimal should return null if promise rejected', async () => {
			expect(await requestAnimal()).toBe(null);
		});

		test('requestAnimals should return null if promise rejected', async () => {
			expect(await requestAnimals()).toBe(null);
		});
	});
});
