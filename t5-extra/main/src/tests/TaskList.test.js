/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react'
import App from '../components/App'
import '@testing-library/jest-dom'


test('renders the app without crashing', () => {
  render(<App />)
  const h1Element = screen.getByText(/A list of tasks/i)
  expect(h1Element).not.toBeNull()
})

test('renders an task list with select buttons', () => {
	render(<App />)
	const tasks = screen.getAllByText(/select/)
	expect(tasks.length).toBe(2)
})

test('can select a task', () => {
	render(<App />)
	const selectButtons = screen.getAllByText('select')
	const selectButton = selectButtons[0]
	expect(selectButton).not.toBeNull()
	act(() => {
		selectButton.click()
	})
	const cancelButtons = screen.getAllByText('deselect')
	expect(cancelButtons.length).toBe(1)
})

test('can remove a selection', () => {
	render(<App />)
	const selectButtons = screen.getAllByText('select')
	let selectButton = selectButtons[0]
	expect(selectButton).not.toBeNull()
	act(() => {
		selectButton.click()
	})
	selectButton = selectButtons[1]
	expect(selectButton).not.toBeNull()
	act(() => {
		selectButton.click()
	})
	let cancelButtons = screen.getAllByText('deselect')
	expect(cancelButtons.length).toBe(2)
	let selectedTasks = screen.queryAllByText(/task 1/)
	expect(selectedTasks.length).toBe(2)
	act(() => {
		cancelButtons[0].click()
	})
	cancelButtons = screen.getAllByText('deselect')
	expect(cancelButtons.length).toBe(1)
	selectedTasks = screen.queryAllByText(/task 1/)
	expect(selectedTasks.length).toBe(1)
})

test('no duplicates are added',  () => {
	render(<App />)
	const selectButtons = screen.getAllByText('select')
	let selectButton = selectButtons[0]
	expect(selectButton).not.toBeNull()
	act(() => {
		selectButton.click()
	})
	act(() => {
		selectButton.click()
	})
	let cancelButtons = screen.getAllByText('deselect')
	expect(cancelButtons.length).toBe(1)
})
