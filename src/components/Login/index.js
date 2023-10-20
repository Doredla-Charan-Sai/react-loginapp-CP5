// Write your code here

import './index.css'

const Login = props => {
  const {userStatus} = props
  return (
    <button className="btn" type="button" onClick={userStatus}>
      Login
    </button>
  )
}

export default Login
