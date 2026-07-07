interface GreetingProps {
  name: string
  messageCount: number
}

function Greeting({ name, messageCount }: GreetingProps) {
  return (
    <div className="card">
      <h2>Hello, {name}!</h2>
      <p>
        You have {messageCount} new message{messageCount === 1 ? '' : 's'}.
      </p>
    </div>
  )
}

export default Greeting
