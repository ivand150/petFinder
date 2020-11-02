import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import BurgerButton from './BurgerButton';

describe.skip('Burger Button', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Route>
          <BurgerButton />
        </Route>
      </BrowserRouter>
    );
  });
  test('renders learn react link', () => {
    const linkElement = screen.getByText(/Species/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should show the first menu when clic menu button', () => {
    const menuButton = document.getElementById('burger-button');
    const firstMenu = document.getElementById('burger-firstMenu');
    menuButton.click();
    expect(firstMenu.style.left).toBe('-15px');
  });

  test('should hide the first menu when clic menu button twice', () => {
    const menuButton = document.getElementById('burger-button');
    const firstMenu = document.getElementById('burger-firstMenu');
    menuButton.click();
    menuButton.click();
    expect(firstMenu.style.left).toBe('-300px');
  });

  test('should show the second menu when clic species button', () => {
    const menuButton = document.getElementById('burger-button');
    const speciesButton = document.getElementById('first-menu__species');
    const secondMenu = document.getElementById('burger-secondMenu');
    menuButton.click();
    speciesButton.click();
    expect(secondMenu.style.left).toBe('-15px');
  });

  test('should hide the second menu when clic menu button', () => {
    const menuButton = document.getElementById('burger-button');
    const speciesButton = document.getElementById('first-menu__species');
    const secondMenu = document.getElementById('burger-secondMenu');
    menuButton.click();
    speciesButton.click();
    expect(secondMenu.style.left).toBe('-15px');
    menuButton.click();
    expect(secondMenu.style.left).toBe('-300px');
  });

  test('Link Dogs should call onClick when clic', () => {
    const dogsButton = document.getElementById('secondMenu__dogs');
    dogsButton.onclick = jest.fn();
    dogsButton.click();
    expect(dogsButton.onclick).toHaveBeenCalled();
  });

  test('Link Cats should call onClick when clic', () => {
    const catsButton = document.getElementById('secondMenu__cats');
    catsButton.onclick = jest.fn();
    catsButton.click();
    expect(catsButton.onclick).toHaveBeenCalled();
  });

  test('Link Horses should call onClick when clic', () => {
    const horsesButton = document.getElementById('secondMenu__horses');
    horsesButton.onclick = jest.fn();
    horsesButton.click();
    expect(horsesButton.onclick).toHaveBeenCalled();
  });

  test('Link Rabbits should call onClick when clic', () => {
    const rabbitsButton = document.getElementById('secondMenu__rabbits');
    rabbitsButton.onclick = jest.fn();
    rabbitsButton.click();
    expect(rabbitsButton.onclick).toHaveBeenCalled();
  });

  test('Link Small Animals should call onClick when clic', () => {
    const smallAnimalsButton = document.getElementById(
      'secondMenu__small-animals'
    );
    smallAnimalsButton.onclick = jest.fn();
    smallAnimalsButton.click();
    expect(smallAnimalsButton.onclick).toHaveBeenCalled();
  });
});
