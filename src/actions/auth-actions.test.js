import * as authActions from './auth-actions';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './action-types';
import './firebase/firebaseIndex';
import * as firebase from 'firebase';

jest.mock('../dispatcher/dispatcher');
jest.mock('./firebase/firebaseIndex');

describe('auth-action functions', () => {
	let fakeUser;
	describe('handleSingIn', () => {
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
		let spy1;
		beforeEach(() => {
			fakeUser = {
				displayName: 'a',
				email: 'b',
				phoneNumber: 'c',
				photoURL: 'd'
			};
			// debugger;
			// firebase.auth.GoogleAuthProvider.mockImplementation(() => {
			// 	return {
			// 		addScope: jest.fn()
			// 	};
			// });
			// firebase.mock = {
			// 	auth: {
			// 		GoogleAuthProvider: jest.fn().mockImplementation(() => {
			// 			return {
			// 				addScope: jest.fn()
			// 			};
			// 		}),
			jest.spyOn(firebase, 'auth').mockImplementation(() => {
				return {
					signInWithPopup: jest.fn().mockImplementation(() => {
						return Promise.resolve({
							user: {
								displayName: 'a',
								email: 'b',
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
			authActions.handleSignIn = jest.fn();
			await authActions.signInWithGoogle();
			expect(authActions.handleSignIn).toHaveBeenCalledTimes(1);
		});

		test('should call handleSignIn with fakeuser', async () => {
			spy1 = jest.spyOn(authActions, 'handleSignIn');
			await authActions.signInWithGoogle();
			expect(spy1).toHaveBeenCalledWith(fakeUser);
			spy1.mockRestore();
		});
	});
});
