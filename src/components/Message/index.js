// Write your code here

import './index.css'

const Message = props => {
  const {msg} = props
  return <h1 className="msg">{msg}</h1>
}

export default Message
