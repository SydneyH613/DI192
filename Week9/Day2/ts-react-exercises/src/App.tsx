import Greeting from './Greeting'
import Counter from './Counter'
import UserCard from './UserCard'
import UserList from './UserList'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>TypeScript + React Exercises</h1>

      <section>
        <h2 className="section-title">Exercise 2: Greeting</h2>
        <Greeting name="Sydney" messageCount={3} />
      </section>

      <section>
        <h2 className="section-title">Exercise 3: Counter</h2>
        <Counter />
      </section>

      <section>
        <h2 className="section-title">Exercise 4: UserCard</h2>
        <UserCard name="Ada Lovelace" age={28} role="Engineer" />
        <UserCard name="Grace Hopper" />
        <UserCard />
      </section>

      <section>
        <h2 className="section-title">Exercise 5: UserList</h2>
        <UserList />
      </section>
    </div>
  )
}

export default App
