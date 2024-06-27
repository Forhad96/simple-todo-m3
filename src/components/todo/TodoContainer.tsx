
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className=" flex justify-between mb-5">

        <AddTodoModal/>
<TodoFilter/>
      </div>
      <div className="bg-primary-gradient h-full w-full rounded-xl p-2">
        {/* <div className="bg-white p-5 flex justify-center items-center font-bold  text-2xl">
          <p>There is no pending todos</p>
        </div> */}
        <div className="bg-white w-full p-5 space-y-3 rounded-lg">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};
export default TodoContainer;
