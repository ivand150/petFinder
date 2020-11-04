import React from 'react'
import List from './List'
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom';

describe('List', () => {
    let container;
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container);
    })

    afterEach(() => {
        unmountComponentAtNode(container)
        container.remove()
        container = null
    })

    test('should render', () => {
        act(() => {
            render(<BrowserRouter> <List animals={[
                { name: 'Kitty', photos: [{ medium: '' }], breeds: { primary: '' } }]}
            /></BrowserRouter>, container);
        })
        expect(container.querySelector('[data-testid="name"]').textContent).toBe('Kitty')
    })

})
