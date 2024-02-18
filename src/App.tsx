import './App.css'
import MessageHistory from "./components/MessageHistory.tsx"
import messages from "./messages/messages.tsx"

function App() {

  return (
    <>
      <MessageHistory list={messages}/>
    </>
  )
}

export default App;
