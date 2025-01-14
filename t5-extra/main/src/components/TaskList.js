import React, { useState, useEffect } from 'react'
import store from '../stores/TaskStore'
import Task from './Task'
import SelectedTasks from './SelectedTasks'

function TaskList () {
	const [tasks, setTasks] = useState([])
	const [selectedTasks, setSelectedTasks] = useState([])

	useEffect(() => {
		setTasks(store.getItems())
		store.emitter.addEventListener('UPDATE', () => {
			setTasks([...store.getItems()])
		})
	}, [])

	const select = (item) => {
		if (!selectedTasks.find(e => e === item)) {
			setSelectedTasks([...selectedTasks, item])
		}
	}

	const deselect = (item) => {
		setSelectedTasks(selectedTasks.filter(e => e !== item))
	}

	return (
		<div>	 
			<div>
				{
					tasks.map((e) => 
						<Task item={e} key={e.id} onSelect={select} />
					)
				}
				<SelectedTasks  />
			</div>
		</div>
	)
}

export default TaskList
