import MessageInterface from "./MessageInterface"

interface MessageProps {
  item: MessageInterface
}

const Message = ({ item }: MessageProps) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{item.from.name}</span>
        <span className="message-data-time">{item.time}</span>
      </div>
      <div className="message my-message">
        {item.text}
      </div>
    </li>
  )
}

export default Message