import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

// const {length} = initialContainerBackgroundClassNames
// const randomColor = Math.ceil(Math.random() * length)

class Comments extends Component {
  state = {
    newCommentList: [],
    nameInput: '',
    commentInput: '',
  }

  onChangeInputValue = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeTextArea = event => {
    this.setState({commentInput: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      newCommentList: [...prevState.newCommentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onDeleteItem = uniqueId => {
    this.setState(prevState => ({
      newCommentList: prevState.newCommentList.filter(
        eachItem => eachItem.id !== uniqueId,
      ),
    }))
  }

  onLike = uniqueId => {
    this.setState(prevState => ({
      newCommentList: prevState.newCommentList.map(eachItem => {
        if (eachItem.id === uniqueId) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {newCommentList, nameInput, commentInput} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          <form
            className="comment-top-container"
            onSubmit={this.onClickAddButton}
          >
            <h1 className="comment-heading">Comments</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-image-1"
            />
            <p className="comment-description">
              Say something about 4.0 Technologies
            </p>
            <input
              type="text"
              placeholder="Your Name"
              className="your-name"
              onChange={this.onChangeInputValue}
              value={nameInput}
            />
            <textarea
              type="text"
              placeholder="Your Comment"
              className="your-comment"
              rows="8"
              cols="55"
              onChange={this.onChangeTextArea}
              value={commentInput}
            >
              {commentInput}
            </textarea>
            <button type="submit" className="add-button">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-image-2"
          />
        </div>
        <div className="count-container">
          <p className="count">{newCommentList.length}</p>
          <p className="count-comments-heading">Comments</p>
        </div>
        <ul className="list-comment-container">
          {newCommentList.map(eachItem => (
            <CommentItem
              key={eachItem.id}
              eachCommentItem={eachItem}
              onDeleteItem={this.onDeleteItem}
              onLike={this.onLike}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
