import HeaderList from './HeaderList';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('HeaderList', () => {
	let container;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		act(() => {
			render(
				<BrowserRouter>
					<HeaderList />
				</BrowserRouter>,
				container
			);
		});
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should render', () => {
		expect(container.querySelector('.logo-name').textContent).toBe('PetFinder');
	});
});
