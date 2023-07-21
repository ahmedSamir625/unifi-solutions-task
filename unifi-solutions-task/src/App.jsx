import AddTodoForm from "./organizms/AddTodoForm";
import Navbar from "./organizms/Navbar";
import TodoPage from "./templates/TodoPage";

function App() {
  return (
    <div >
      <Navbar />
      <TodoPage />
      <AddTodoForm />
    </div>
  );
}

export default App;
