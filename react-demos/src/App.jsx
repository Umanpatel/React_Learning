import Counter from "./components/Counter";
import ToDoList from "./components/ToDoList";
import Profile from "./components/Profile";  
import ShoppingList from "./components/ShoppingList";
const App = () => {
 
  return (
    <section>
      <Counter />
      <ToDoList/>
      <Profile/>
      <ShoppingList/>
    </section>
  );
};
export default App;