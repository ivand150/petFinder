import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import * as actions from '../../actions/actions';

describe('Header', () => {
  let speciesSelect;
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Route>
          <Header />
        </Route>
      </BrowserRouter>
    );
    speciesSelect = document.getElementById('dropdown-species__title');
  });
  test('renders learn react link', () => {
    const linkElement = screen.getByText(/Select country/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Option dogs should call requestAnimals with argument "dog" when clic', () => {
    speciesSelect.click();
    const dogsOption = document.getElementById('dropdown-species__dogs');
    actions.requestAnimals = jest.fn();
    dogsOption.click();
    expect(actions.requestAnimals).toHaveBeenCalledWith('dog');
  });

  test('Option cats should call requestAnimals with argument "cat" when clic', () => {
    speciesSelect.click();
    const catsOption = document.getElementById('dropdown-species__cats');
    actions.requestAnimals = jest.fn();
    catsOption.click();
    expect(actions.requestAnimals).toHaveBeenCalledWith('cat');
  });

  test('Option horses should call requestAnimals with argument "horse" when clic', () => {
    speciesSelect.click();
    const horsesOption = document.getElementById('dropdown-species__horses');
    actions.requestAnimals = jest.fn();
    horsesOption.click();
    expect(actions.requestAnimals).toHaveBeenCalledWith('horse');
  });

  test('Option rabbits should call requestAnimals with argument "rabbit" when clic', () => {
    speciesSelect.click();
    const rabbitsOption = document.getElementById('dropdown-species__rabbits');
    actions.requestAnimals = jest.fn();
    rabbitsOption.click();
    expect(actions.requestAnimals).toHaveBeenCalledWith('rabbit');
  });

  test('Option small animals should call requestAnimals with argument "small-furry" when clic', () => {
    speciesSelect.click();
    const smallAnimalsOption = document.getElementById(
      'dropdown-species__small-animals'
    );
    actions.requestAnimals = jest.fn();
    smallAnimalsOption.click();
    expect(actions.requestAnimals).toHaveBeenCalledWith('small-furry');
  });
});
