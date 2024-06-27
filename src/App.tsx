import TodoContainer from "./components/todo/TodoContainer";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <h1 className="text-center text text-3xl font-semibold">
        My Simple Todo
      </h1>
      <TodoContainer/>

    </Container>
  );
}

export default App;
