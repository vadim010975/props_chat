import MessageInterface from "./MessageInterface"

interface TypingProps {
  item: MessageInterface
}

const Typing = ({ item }: TypingProps) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{item.from.name}</span>
        <span className="message-data-time">{item.time}</span>
      </div>
      <div className="message typing-message">
        Пишет...
      </div>
    </li>
  )
}

export default Typing