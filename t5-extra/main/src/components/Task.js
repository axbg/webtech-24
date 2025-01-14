import React, { useState } from 'react'
import store from '../stores/TaskStore'

function Task (props) {
  let { item, onSelect } = props
  return (
    <div>
      {
        <>
          {item.description} {item.priority}
        </>
      }
    </div>
  )

}

export default Task
