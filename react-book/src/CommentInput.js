import React, { Component } from 'react'
class CommentInput extends Component {

  state = {
    username:"",
    content: ''
  }
  
  handleUsernameChange = (e) => {
    this.setState({
      username:e.target.value
    })
  }
  handleContentChange = (e) => {
    this.setState({
      content:e.target.value
    })
  }
  handleSubmit = () => {
    // 通过方法判断props是否传入onSubmit属性
    if(this.props.onSubmit) {
      const {username,content} = this.state
      this.props.onSubmit({username,content})
    }
    // setState清空用户输入的评论内容（为了用户体验，保留输入的用户名）
    this.setState({
      content:''
    })
  }


  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名</span>
          <div className="comment-field-input">
            <input 
              value={this.state.username} 
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea 
              value={this.state.content}
              onChange={this.handleContentChange}
              />
          </div>
        </div>
        <div className="comment-field-button">
          <button 
            onClick={this.handleSubmit}>
              发布
          </button>
        </div>
      </div>
    )
  }
}
export default CommentInput
