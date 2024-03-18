import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from './components/TagItem'
import TaskItem from './components/TaskItem'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    activeOption: tagsList[0].optionId,
    activeTask: 'ALL',
    allList: [],
    healthList: [],
    educationList: [],
    entertainmentList: [],
    sportsList: [],
    travelList: [],
    othersList: [],
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({activeOption: event.target.value})
  }

  toggleActiveTag = givenId => {
    const {activeTask} = this.state
    if (activeTask === givenId) {
      this.setState({activeTask: 'ALL'})
    } else {
      this.setState({activeTask: givenId})
    }
  }

  onAddTask = event => {
    event.preventDefault()
    const {searchInput, activeOption} = this.state
    const activeItem = tagsList.find(
      eachItem => eachItem.optionId === activeOption,
    )
    const {displayText} = activeItem
    const newItem = {
      id: uuidv4(),
      name: searchInput,
      category: displayText,
    }

    switch (activeOption) {
      case 'HEALTH':
        this.setState(prevState => ({
          healthList: [...prevState.healthList, newItem],
          allList: [...prevState.allList, newItem],
        }))
        break
      case 'EDUCATION':
        this.setState(prevState => ({
          educationList: [...prevState.educationList, newItem],
          allList: [...prevState.allList, newItem],
        }))
        break
      case 'ENTERTAINMENT':
        this.setState(prevState => ({
          entertainmentList: [...prevState.entertainmentList, newItem],
          allList: [...prevState.allList, newItem],
        }))
        break
      case 'SPORTS':
        this.setState(prevState => ({
          sportsList: [...prevState.sportsList, newItem],
          allList: [...prevState.allList, newItem],
        }))
        break
      case 'TRAVEL':
        this.setState(prevState => ({
          travelList: [...prevState.travelList, newItem],
          allList: [...prevState.allList, newItem],
        }))
        break
      default:
        this.setState(prevState => ({
          othersList: [...prevState.othersList, newItem],
          allList: [...prevState.allList, newItem],
        }))
        break
    }
    this.setState({searchInput: '', activeOption: tagsList[0].optionId})
  }

  render() {
    const {
      searchInput,
      activeOption,
      activeTask,
      healthList,
      educationList,
      entertainmentList,
      sportsList,
      travelList,
      othersList,
      allList,
    } = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <form className="style-form" onSubmit={this.onAddTask}>
            <h1 className="style-form-heading">Create a task!</h1>
            <label className="style-label" htmlFor="task">
              Task
            </label>
            <input
              className="style-input"
              id="task"
              type="text"
              placeholder="Enter the task here"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <label className="style-label" htmlFor="tags" value={activeOption}>
              Tags
            </label>
            <select
              className="style-input"
              id="tags"
              value={activeOption}
              onChange={this.onChangeOption}
            >
              {tagsList.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="submit-button">
              Add Task
            </button>
          </form>

          <div className="tags-container">
            <h1 className="tag-heading">Tags</h1>
            <ul className="tags-list">
              {tagsList.map(eachTag => (
                <TagItem
                  key={eachTag.optionId}
                  tagDetails={eachTag}
                  toggleActiveTag={this.toggleActiveTag}
                  activeTask={activeTask === eachTag.optionId}
                />
              ))}
            </ul>
            <h1 className="tag-heading">Tasks</h1>
            <ul className="tasks-list">
              {activeTask === 'HEALTH' &&
                (healthList.length === 0 ? (
                  <div className="no-tasks-container">
                    <p className="tag-heading">No Tasks Added Yet</p>
                  </div>
                ) : (
                  healthList.map(eachTask => (
                    <TaskItem key={eachTask.id} taskDetails={eachTask} />
                  ))
                ))}
              {activeTask === 'EDUCATION' &&
                (educationList.length === 0 ? (
                  <div className="no-tasks-container">
                    <p className="tag-heading">No Tasks Added Yet</p>
                  </div>
                ) : (
                  educationList.map(eachTask => (
                    <TaskItem key={eachTask.id} taskDetails={eachTask} />
                  ))
                ))}
              {activeTask === 'ENTERTAINMENT' &&
                (entertainmentList.length === 0 ? (
                  <div className="no-tasks-container">
                    <p className="tag-heading">No Tasks Added Yet</p>
                  </div>
                ) : (
                  entertainmentList.map(eachTask => (
                    <TaskItem key={eachTask.id} taskDetails={eachTask} />
                  ))
                ))}
              {activeTask === 'SPORTS' &&
                (sportsList.length === 0 ? (
                  <div className="no-tasks-container">
                    <p className="tag-heading">No Tasks Added Yet</p>
                  </div>
                ) : (
                  sportsList.map(eachTask => (
                    <TaskItem key={eachTask.id} taskDetails={eachTask} />
                  ))
                ))}
              {activeTask === 'TRAVEL' &&
                (travelList.length === 0 ? (
                  <div className="no-tasks-container">
                    <p className="tag-heading">No Tasks Added Yet</p>
                  </div>
                ) : (
                  travelList.map(eachTask => (
                    <TaskItem key={eachTask.id} taskDetails={eachTask} />
                  ))
                ))}
              {activeTask === 'OTHERS' &&
                (othersList.length === 0 ? (
                  <div className="no-tasks-container">
                    <p className="tag-heading">No Tasks Added Yet</p>
                  </div>
                ) : (
                  othersList.map(eachTask => (
                    <TaskItem key={eachTask.id} taskDetails={eachTask} />
                  ))
                ))}
              {activeTask === 'ALL' &&
                (allList.length === 0 ? (
                  <div className="no-tasks-container">
                    <p className="tag-heading">No Tasks Added Yet</p>
                  </div>
                ) : (
                  allList.map(eachTask => (
                    <TaskItem key={eachTask.id} taskDetails={eachTask} />
                  ))
                ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
