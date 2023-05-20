import React,{Component} from "react";
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}

export default App