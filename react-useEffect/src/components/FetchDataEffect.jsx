import { useState, useEffect } from "react"

const FetchDataEffect = () => {
    const [posts, setPosts] = useState([])
    // Data fetching using useEffect
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            if (data && data.length) setPosts(data)
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>FetchDataEffect.jsx</h1>
            <ul>
                {posts.map((todo) => (
                    <section key={todo.id}>
                        <li>{todo.title}</li>
                        <li>Body: {todo.body}</li>
                    </section>
                ))}
            </ul>
        </div>
    )
}

export default FetchDataEffect