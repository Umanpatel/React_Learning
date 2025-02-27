import { useEffect} from 'react'
const BasicEffect = () => {
    useEffect(()=>{
        console.log('Basic Component Mounted')
    }, [])
  return (
    <div>
        <h1>BasicEffect.jsx: Check the Console to see the message</h1>
    </div>
  )
}

export default BasicEffect