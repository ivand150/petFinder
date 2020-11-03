import { render, screen } from '@testing-library/react';
import store from '../../stores/principal-store';
import MainList from './MainList'
import * as actions from './../../actions/actions'

describe('main list', () => {
    beforeEach(() => {
        render(<MainList />);
    })
    test('renders learn react link', () => {
        const linkElement = screen.getByText(/Aply filters/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('should', () => {
        actions.requestAnimals = jest.fn()
        store.setToken('hola')
        store.setAnimals()
        store.emitChange()
        expect(actions.requestAnimals).toHaveBeenCalled()
    })

    test('should request token', () => {
        actions.requestToken = jest.fn()
        store.setToken()
        store.emitChange()
        expect(actions.requestToken).toHaveBeenCalled()
    })

})


