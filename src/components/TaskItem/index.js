import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {name, category} = taskDetails
  return (
    <li className="taskItem">
      <p className="task-name">{name}</p>
      <p className="task-button">{category}</p>
    </li>
  )
}

export default TaskItem
