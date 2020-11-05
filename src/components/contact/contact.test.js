import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Contact from './Contact';


describe('Contact', () => {
    let container;
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container);
    })

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove()
        container = null;
    })

    test('should have Contact us!', () => {
        act(() => {
            render(<BrowserRouter><Contact /></BrowserRouter>, container)
        })
        expect(container.querySelector('h1').textContent).toBe('Contact us!')
    })
})
