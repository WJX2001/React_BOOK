import { Component } from "react";


class LikeButton extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  handleClickOnLikeButton = () => {
    this.setState((prevState) => {
      return {count:0}
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    this.setState((prevState) => {
      return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    })
    console.log(this.state.count)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClickOnLikeButton}>count: {this.state.count}</button>
      </div>
    )
  }
}



class App extends Component{
  render() {
    return (
       <div>
          <LikeButton />
       </div>
    );
  }
}

export default App