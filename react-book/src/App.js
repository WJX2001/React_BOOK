import React,{Component} from "react";
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'

class App extends Component {

    state = {
        comments:[]
    }

    handleSubmitComment = (comment) => {
        if(!comment) return 
        if(!comment.username) return alert('请输入用户名')
        if(!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
            comments:this.state.comments
        })
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment}/>
                <CommentList comments ={this.state.comments} />
            </div>
        )
    }
}

export default App