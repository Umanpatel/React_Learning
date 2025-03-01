import UniqueId from "./components/UniqueId"

const App = () => {
  return (
    <div>
      <UniqueId/>
      <p>This is Unique Id Hook, It will generate unique id for all the labels.
        You can see the console in inspect mode.
      </p>
      <UniqueId/>
    </div>
  )
}

export default App
