

import { useState, useEffect } from "react"
const App = () => {
  const [data, setData] = useState([])

  // Data fetching using useEffect
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json()
      if (data && data.length) setData(data)
    }

    fetchData();
  }, []);

  return (
    // Render data 
    <div>
      <ul>
        {data.map((todo) => (
          <section key={todo.id}>
            <li>{todo.title}</li>
            <li>Body: {todo.body}</li>
          </section>
        ))}
      </ul>
    </div>
  )
}
export default App