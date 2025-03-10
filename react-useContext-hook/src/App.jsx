// import {  createContext } from "react";
// import ComponentA from "./components/ComponentA";
import { UserProvider } from "./UserContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";

// create context instance  
// export const Data = createContext();
// export const Data1 = createContext();

const App = () => {
  // const name = "Umang";
  // const age = 25;
  return (
    <div>
      {/* <Data.Provider value={name}>
        <Data1.Provider value={age}>
            <ComponentA />
        </Data1.Provider>
      </Data.Provider> */}

      <UserProvider>
        <UserProfile/>
        <UpdateUser/>
      </UserProvider>
    </div>
  )
}

export default App