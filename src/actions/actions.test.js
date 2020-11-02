import { requestToken, requestAnimal, requestAnimals } from './actions'
import actionTypes from './action-types'
import dispatcher from '../dispatcher/dispatcher'

describe('actions functions', () => {
    describe('request token', () => {
        test('should disptach token', async () => {
            global.fetch = jest.fn().mockImplementationOnce(() => {
                return Promise.resolve(
                    {
                        json: jest.fn().mockReturnValueOnce(
                            { access_token: '1234' }
                        )
                    }
                )
            })
            let testToken = '';
            dispatcher.register((action) => {
                switch (action.type) {
                    case actionTypes.REQUEST_TOKEN:
                        testToken = action.payload;
                        break;
                    default:
                        testToken = 'error'
                        break;
                }
            })
            await requestToken()
            expect(testToken).toBe('1234')
        })
        test('shoould return null if promise rejected', async () => {
            global.fetch = jest.fn().mockImplementationOnce(() => {
                return Promise.reject()
            })
            expect(await requestToken()).toBe(null)

        })
    })

    describe('request animal', () => {
        test('should disptach animal', async () => {
            global.fetch = jest.fn().mockImplementationOnce(() => {
                return Promise.resolve(
                    {
                        json: jest.fn().mockReturnValueOnce(
                            { animal: { name: 'cat' } }
                        )
                    }
                )
            })
            let testAnimal = {};
            dispatcher.register((action) => {
                switch (action.type) {
                    case actionTypes.REQUEST_ANIMAL:
                        testAnimal = action.payload;
                        break;
                    default:
                        testAnimal = 'error'
                        break;
                }
            })
            await requestAnimal()
            expect(testAnimal).toEqual({ name: 'cat' })
        })

        test('shoould return null if promise rejected', async () => {
            global.fetch = jest.fn().mockImplementationOnce(() => {
                return Promise.reject()
            })
            expect(await requestAnimal()).toBe(null)

        })
    })

    describe('request animals', () => {
        test('should disptach animals', async () => {
            global.fetch = jest.fn().mockImplementationOnce(() => {
                return Promise.resolve(
                    {
                        json: jest.fn().mockReturnValueOnce(
                            { animals: [{ name: 'cat' }] }
                        )
                    }
                )
            })
            let testAnimals = [{}];
            dispatcher.register((action) => {
                switch (action.type) {
                    case actionTypes.REQUEST_ANIMALS:
                        testAnimals = action.payload;
                        break;
                    default:
                        testAnimals = 'error'
                        break;
                }
            })
            await requestAnimals('cat', 'male', 'young', 'dog')
            expect(testAnimals).toEqual([{ name: 'cat' }])
        })
        test('shoould return null if promise rejected', async () => {
            global.fetch = jest.fn().mockImplementationOnce(() => {
                return Promise.reject()
            })
            expect(await requestAnimals()).toBe(null)

        })
    })
})