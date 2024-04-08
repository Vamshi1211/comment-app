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

const commentList = []

class Comments extends Component {
  state = {newCommentList: commentList, name: '', comment: ''}

  onChangeInputValue = event => {
    this.setState({name: event.target.value})
  }

  onChangeTextArea = event => {
    this.setState({comment: event.target.value})
  }

  onClickAddButton = () => {
    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }
    this.setState(prevState => ({
      newCommentList: [...prevState.newCommentList, newComment],
    }))
  }

  render() {
    const {newCommentList, name, comment} = this.state
    console.log(newCommentList)
    console.log(name)
    console.log(comment)
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="comment-top-container">
            <h1 className="comment-heading">Comments</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
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
              value={name}
            />
            <textarea
              type="text"
              placeholder="Your Comment"
              className="your-comment"
              rows="8"
              cols="55"
              onChange={this.onChangeTextArea}
              value={comment}
            >
              {comment}
            </textarea>
            <button
              type="button"
              className="add-button"
              onClick={this.onClickAddButton}
            >
              Add Button
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
            className="comment-image-2"
          />
        </div>
        <div className="count-container">
          <p className="count">0</p>
          <p className="count-comments-heading">Comments</p>
        </div>
        <ul className="list-comment-container">
          {newCommentList.map(eachItem => (
            <CommentItem
              key={eachItem.id}
              eachCommentItem={eachItem}
              backgroundColors={initialContainerBackgroundClassNames}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
