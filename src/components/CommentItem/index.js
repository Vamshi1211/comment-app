// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachCommentItem, onDeleteItem, onLike} = props
  const {id, name, comment, date, isLiked, initialClassName} = eachCommentItem

  //   const {length} = backgroundColors
  //   const randomColor = Math.ceil(Math.random() * length)
  const dateInMins = formatDistanceToNow(date)

  const firstChar = name.slice(0, 1)

  const deleteButtonIsClicked = () => {
    onDeleteItem(id)
  }

  const isToggleLike = () => {
    onLike(id)
  }

  let likeImageUrl
  let likeText

  if (isLiked) {
    likeImageUrl =
      'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    likeText = 'liked'
  } else {
    likeImageUrl =
      'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  }

  return (
    <li className="list-container">
      <div className="logo-and-name-container">
        <div className="logo-container">
          <p className={`${initialClassName} logo-name`}>{firstChar}</p>
        </div>

        <div className="name-comment-container">
          <div className="name-time-container">
            <h1 className="name">{name}</h1>
            <p className="date-in-mins">{dateInMins}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-image-text-container">
          <button type="button" className="like-button" onClick={isToggleLike}>
            <img src={likeImageUrl} alt="like" className="like-image" />
          </button>
          <p className={`${likeText} like`} onClick={isToggleLike}>
            Like
          </p>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={deleteButtonIsClicked}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
