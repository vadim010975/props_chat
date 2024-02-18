import { FC } from "react"
import MessageInterface from "./MessageInterface"
import Message from "./Message"
import Response from "./Response"
import Typing from "./Typing"

interface MessageHistoryProps {
  list: Array<MessageInterface>
}

const MessageHistory: FC<MessageHistoryProps> = ({ list = [] }) => {

  const getComponent = (item: MessageInterface) => {
    return (item.type === 'message' ?
    <Message item={item} key = {item.id} /> :
    item.type === 'response' ?
    <Response item={item} key = {item.id} /> :
    <Typing item={item} key = {item.id} />)
  }

  return (
    <ul className="chat-history">
      {list.map(item => (
        getComponent(item)
      ))}
    </ul>
  )
}

export default MessageHistory