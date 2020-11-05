import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import ScrollRandomCats from './ScrollRandomCats'
import * as action from './../../actions/actions'
import store from './../../stores/principal-store'

describe('ScrollRandomCats', () => {
    let container;

    const animalsMock = [{
        id: 99,
        photos: [{ medium: 'ghfhgfh' }],
        name: 'gjgj'

    }]

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container)
        act(() => {
            store.setAnimals(animalsMock);
            render(<BrowserRouter><ScrollRandomCats /></BrowserRouter>, container)
        })
    })

    afterEach(() => {
        unmountComponentAtNode(container)
        container.remove()
        container = null;
    })

    test('should render', () => {
        expect(container.querySelector('p').textContent).toBe('Cats available for adoption')
    })

    test('should call requestAnimal when click', () => {
        debugger;
        let button = document.getElementById('cat-card-btn')
        action.requestAnimal = jest.fn()
        store.emitChange();
        button.click();
        expect(action.requestAnimal).toHaveBeenCalledTimes(1)
    })

    test('should request token', () => {
        action.requestToken = jest.fn();
        store.setToken();
        store.emitChange();
        expect(action.requestToken).toHaveBeenCalled();
    });
})