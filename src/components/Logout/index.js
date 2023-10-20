// Write your code here

import './index.css'

const Logout = props => {
  const {userStatus} = props
  return (
    <button className="btn" type="button" onClick={userStatus}>
      Logout
    </button>
  )
}

export default Logout
