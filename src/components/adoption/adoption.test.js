import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Adoption from './Adoption'

describe('Adoption', () => {
    let container;
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container);
    })

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })

    test('should have Well never share your email with anyone else.', () => {
        act(() => {
            render(<BrowserRouter><Adoption /></BrowserRouter>, container)
        })
        expect(container.querySelector('.text-muted').textContent).toBe("We'll never share your email with anyone else.")
    })
})