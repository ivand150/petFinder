import SliderDetail from './SliderDetail';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('details test', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should render slider without animal photo', () => {
		act(() => {
			render(
				<SliderDetail
					animal={{
						photos: []
					}}
				/>,
				container
			);
		});
		expect(container.querySelector('.slide__image').src).toBe(
			'https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5f9c013b390a4735863ccb17/649f0410e7a316f5720a9deaea73b588/112815953-stock-vector-no-image-available-icon-flat-vector.jpg'
		);
	});
	test('should render slider with only 1 animal photo', () => {
		act(() => {
			render(
				<SliderDetail
					animal={{
						photos: [{ full: 'asd' }]
					}}
				/>,
				container
			);
		});
		expect(container.querySelector('.slide__image').getAttribute('src')).toBe(
			'asd'
		);
	});

	test('should render slider with many animal photos', () => {
		act(() => {
			render(
				<SliderDetail
					animal={{
						photos: [{ full: 'asd' }, { full: 'asf' }]
					}}
				/>,
				container
			);
		});
		expect(container.querySelector('.slide__image').getAttribute('src')).toBe(
			'asd'
		);
	});
});
