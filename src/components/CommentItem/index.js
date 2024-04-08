// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachCommentItem, backgroundColors} = props
  const {name, comment} = eachCommentItem

  const {length} = backgroundColors
  const randomColor = Math.ceil(Math.random() * length)
  const firstChar = name.slice(0, 1)
  return (
    <li>
      <p className={`${backgroundColors[randomColor]} logo-name`}>
        {firstChar}
      </p>
    </li>
  )
}

export default CommentItem
