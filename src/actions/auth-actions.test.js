import * as authActions from './auth-actions';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './action-types';
import './firebase/firebaseIndex';
import * as firebase from 'firebase';

jest.mock('../dispatcher/dispatcher');
jest.mock('./firebase/firebaseIndex');

describe('auth-action functions', () => {
	let fakeUser;
	describe('handleSignIn', () => {
		beforeEach(() => {
			fakeUser = {
				displayName: 'a',
				email: 'b',
				phoneNumber: 'c',
				photoURL: 'd'
			};
			authActions.handleSignIn(fakeUser);
		});

		test('should call dispatch once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('action.payload should be fakeUser', () => {
			expect(dispatcher.dispatch.mock.calls[0][0].payload).toEqual(fakeUser);
		});

		test('action.type should be AUTH_LOGIN', () => {
			expect(dispatcher.dispatch.mock.calls[0][0].type).toBe(
				actionTypes.AUTH_LOGIN
			);
		});
	});

	describe('handleError', () => {
		let type;
		beforeEach(() => {
			type = 'fakeType';
			authActions.handleError(type);
		});

		test('should call dispatch once', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('action.type should be fakeType', () => {
			expect(dispatcher.dispatch.mock.calls[0][0].type).toBe('fakeType');
		});
	});

	describe('signInWithGoogle', () => {
		beforeEach(() => {
			fakeUser = {
				displayName: 'abc',
				email: 'bca',
				phoneNumber: 'c',
				photoURL: 'd'
			};

			jest.spyOn(firebase, 'auth').mockImplementation(() => {
				return {
					signInWithPopup: jest.fn().mockImplementation(() => {
						return Promise.resolve({
							user: {
								displayName: 'abc',
								email: 'bca',
								phoneNumber: 'c',
								photoURL: 'd'
							}
						});
					})
				};
			});
			firebase.auth.GoogleAuthProvider = jest
				.fn()
				.mockReturnValue({ addScope: jest.fn() });
		});

		test('should call handleSignIn once', async () => {
			await authActions.signInWithGoogle();
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('handleSignIn should dispatch fakeuser', async () => {
			fakeUser = {
				displayName: 'abc',
				email: 'bca',
				phoneNumber: 'c',
				photoURL: 'd'
			};
			await authActions.signInWithGoogle();
			expect(dispatcher.dispatch.mock.calls[0][0].payload).toEqual(fakeUser);
		});
	});

	describe('signInWithEmail', () => {
		beforeEach(() => {
			fakeUser = {
				displayName: 'abc',
				email: 'bca',
				phoneNumber: 'c',
				photoURL: 'd'
			};

			jest.spyOn(firebase, 'auth').mockImplementation(() => {
				return {
					signInWithEmailAndPassword: jest
						.fn()
						.mockImplementation((email, password) => {
							return Promise.resolve({
								user: {
									displayName: 'abc',
									email: 'bca',
									phoneNumber: 'c',
									photoURL: 'd'
								}
							});
						})
				};
			});
		});

		test('should call handleSignIn once', async () => {
			await authActions.signInWithEmail();
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('handleSignIn should dispatch fakeuser', async () => {
			fakeUser = {
				displayName: 'abc',
				email: 'bca',
				phoneNumber: 'c',
				photoURL: 'd'
			};
			await authActions.signInWithEmail();
			expect(dispatcher.dispatch.mock.calls[0][0].payload).toEqual(fakeUser);
		});
	});

	describe('signOut', () => {
		beforeEach(() => {
			jest.spyOn(firebase, 'auth').mockImplementation(() => {
				return {
					signOut: jest.fn().mockImplementation(() => {
						return Promise.resolve();
					})
				};
			});
		});

		test('should call signOut once', async () => {
			await authActions.signOut();
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('action type should be AUTH_SIGNOUT', async () => {
			await authActions.signOut();
			expect(dispatcher.dispatch.mock.calls[0][0].type).toBe(
				actionTypes.AUTH_SIGNOUT
			);
		});
	});

	describe('Tests with promise rejected', () => {
		beforeEach(() => {
			jest.spyOn(firebase, 'auth').mockImplementation(() => {
				return {
					signInWithPopup: jest.fn().mockImplementation(() => {
						return Promise.reject();
					}),
					signInWithEmailAndPassword: jest.fn().mockImplementation(() => {
						return Promise.reject();
					}),
					signOut: jest.fn().mockImplementation(() => {
						return Promise.reject();
					})
				};
			});
			firebase.auth.GoogleAuthProvider = jest
				.fn()
				.mockReturnValue({ addScope: jest.fn() });
		});

		test('signInWithGoogle should call dispatcher once with handleError', async () => {
			await authActions.signInWithGoogle();
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('signInWithGoogle should call dispatcher with type AUTH_LOGIN_ERROR', async () => {
			await authActions.signInWithGoogle();
			expect(dispatcher.dispatch.mock.calls[0][0].type).toBe(
				actionTypes.AUTH_LOGIN_ERROR
			);
		});

		test('signInWithEmail should call dispatcher once with handleError', async () => {
			await authActions.signInWithEmail();
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('signInWithEmail should call dispatcher with type AUTH_LOGIN_ERROR', async () => {
			await authActions.signInWithEmail();
			expect(dispatcher.dispatch.mock.calls[0][0].type).toBe(
				actionTypes.AUTH_LOGIN_ERROR
			);
		});

		test('signOut should call dispatcher once with handleError', async () => {
			await authActions.signOut();
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});

		test('signOut should call dispatcher with type AUTH_LOGIN_ERROR', async () => {
			await authActions.signOut();
			expect(dispatcher.dispatch.mock.calls[0][0].type).toBe(
				actionTypes.AUTH_SIGNOUT_ERROR
			);
		});
	});
});
