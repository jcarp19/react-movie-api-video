import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import SingleMovieInfo from './components/SingleMovieInfo';
import { Watchlist } from './components/Watchlist';
import MovieSearchForm from './components/MovieSearchForm';

test('renders learn react link', () => {
  render(<Watchlist />);
  const button = screen.getByRole("button", {name: "addMovie"});
  expect(button).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<Watchlist />);
  const input = screen.getByRole("Input", {name: "addInput"});
  expect(input).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<Watchlist />);
  const input1 = screen.getByRole("Input1", {name: "addInput1"});
  expect(input1).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<MovieSearchForm />);
  const search = screen.getByRole("Search", {name: "addSearch"});
  expect(search).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<MovieSearchForm />);
  const div = screen.getByRole("Div", {name: "addDiv"});
  expect(div).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<Watchlist />);
  const div1 = screen.getByRole("Div1", {name: "addDiv1"});
  expect(div1).toBeInTheDocument();
});
