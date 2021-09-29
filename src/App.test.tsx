import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import SingleMovieInfo from './components/SingleMovieInfo';
import { Watchlist } from './components/Watchlist';
import MovieSearchForm from './components/MovieSearchForm';

test('Text that displays search for title or filters movies', () => {
  const spy = jest.fn();  
  render(<MovieSearchForm onSubmit = {spy} />);
  const para = screen.getByRole("p", {name: "addp"});
  expect(para).toBeInTheDocument();
});
test('Text that displays heading find a great movie', () => {
  const spy = jest.fn(); 
  render(<MovieSearchForm onSubmit = {spy} />);
  const input = screen.getByRole("h1", {name: "addh1"});
  expect(input).toBeInTheDocument();
});
test('Selects for filtering movies', () => {
  const spy = jest.fn(); 
  render(<MovieSearchForm onSubmit = {spy} />);
  const input1 = screen.getByRole("select", {name: "addselect"});
  expect(input1).toBeInTheDocument();
});
test('Button that searchs for the movies', () => {
 const spy = jest.fn();  
  render(<MovieSearchForm onSubmit = {spy} />);
  const search = screen.getByRole("Search", {name: "addSearch"});
  expect(search).toBeInTheDocument();
});
test('Div that holds the search wrapper', () => {
  const spy = jest.fn(); 
  render(<MovieSearchForm onSubmit = {spy} />);
  const div = screen.getByRole("Div", {name: "addDiv"});
  expect(div).toBeInTheDocument();
});
test('Input that is the place holder for search to add text', () => {
  const spy = jest.fn(); 
  render(<MovieSearchForm onSubmit = {spy} />);
  const div1 = screen.getByRole("input", {name: "addinput"});
  expect(div1).toBeInTheDocument();
});
