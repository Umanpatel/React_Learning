import {  createContext } from "react";
import ComponentA from "./components/ComponentA";
import { UserProvider } from "./UserContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";

// create context instance  
export const Data = createContext();
export const Data1 = createContext();
export const Data2 = createContext();

const App = () => {
  const name = "Umang";
  const age = 25;
  const college = "Humber";
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <Data2.Provider value={college}>
            <ComponentA />
          </Data2.Provider>
        </Data1.Provider>
      </Data.Provider>

      <UserProvider>
        <UserProfile/>
        <UpdateUser/>
      </UserProvider>
    </div>
  )
}

export default App