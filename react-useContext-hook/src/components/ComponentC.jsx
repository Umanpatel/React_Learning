import { useContext } from "react"
import {Data, Data1} from "../App";
const ComponentC = () => {
    const useName = useContext(Data);
    const Age = useContext(Data1);
  return (
    <h1>
        My name is {useName} and I am {Age} years old.
        
    </h1>
  )
}

export default ComponentC