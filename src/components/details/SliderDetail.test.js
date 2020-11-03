import SliderDetail from './SliderDetail';
import { render, screen } from '@testing-library/react';

describe.skip('SliderDetail', () => {
  describe('slider detail with attribute animal', () => {
    beforeEach(() => {
      render(<SliderDetail animal={{ photos: ['1', '2'] }} />);
    });
    test('should render', () => {
      const linkElement = screen.getByText(/chevron_right/i);
      expect(linkElement).toBeInTheDocument();
    });
    test('left aside should display none', () => {
      let leftSlide = document.getElementById('aside-left');
      let slides = document.getElementsByClassName('mySlides');
      leftSlide.click();
      expect(slides[0].style.display).toBe('none');
    });
    test('right aside should display none', () => {
      let rightSlide = document.getElementById('aside-right');
      let slides = document.getElementsByClassName('mySlides');
      rightSlide.click();
      expect(slides[0].style.display).toBe('none');
    });
    test('dot click should display block', () => {
      let dot0 = document.getElementById('dot0');
      let slides = document.getElementsByClassName('mySlides');
      dot0.click();
      expect(slides[0].style.display).toBe('block');
    });
    test('two clicks should display block on first photo', () => {
      let rightSlide = document.getElementById('aside-right');
      let slides = document.getElementsByClassName('mySlides');
      rightSlide.click();
      rightSlide.click();
      expect(slides[0].style.display).toBe('block');
    });
  });
  describe('render sliderdetail without animal attribute', () => {
    test('render without attribute', () => {
      render(<SliderDetail />);
      const linkElement = screen.getByText(/chevron_right/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
