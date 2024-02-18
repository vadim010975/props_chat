import MessageInterface from "./MessageInterface"

interface ResponseProps {
  item: MessageInterface
}

const Response = ({ item }: ResponseProps) => {
  return (
    <li className="clearfix">
    <div className="message-data align-right">
      <span className="message-data-time">{item.time}</span> &nbsp; &nbsp;
      <span className="message-data-name">{item.from.name}</span>
      <i className="fa fa-circle me"></i>
    </div>
    <div className="message other-message float-right">
      {item.text}
    </div>
  </li>
  )
}

export default Response