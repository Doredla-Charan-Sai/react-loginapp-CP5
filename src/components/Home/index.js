// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Logout from '../Logout'
import Login from '../Login'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onLog = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-cont">
        <div className="content-cont">
          {isLoggedIn && (
            <div>
              <Message msg="Welcome User" />
              <Logout userStatus={this.onLog} />
            </div>
          )}
          {!isLoggedIn && (
            <div>
              <Message msg="Please Login" />
              <Login userStatus={this.onLog} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
