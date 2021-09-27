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
  const button = screen.getByRole("Input", {name: "addInput"});
  expect(button).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<Watchlist />);
  const button = screen.getByRole("Input1", {name: "addInput1"});
  expect(button).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<MovieSearchForm />);
  const button = screen.getByRole("Search", {name: "addSearch"});
  expect(button).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<MovieSearchForm />);
  const button = screen.getByRole("Div", {name: "addDiv"});
  expect(button).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<Watchlist />);
  const button = screen.getByRole("Div1", {name: "addDiv1"});
  expect(button).toBeInTheDocument();
});
