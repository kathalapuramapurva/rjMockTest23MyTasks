import './index.css'

const TagItem = props => {
  const {tagDetails, toggleActiveTag, activeTask} = props
  const {displayText, optionId} = tagDetails
  const buttonClassName = activeTask ? 'active' : 'normal'
  const onToggleActiveTag = () => {
    toggleActiveTag(optionId)
  }
  return (
    <li className="tag-item">
      <button
        type="button"
        className={`tag-button ${buttonClassName}`}
        onClick={onToggleActiveTag}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
