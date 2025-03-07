import { useAppDispatch } from "@/redux/hooks";
import { Button } from "../ui/button";
import { removeTodo, toggleTodoState } from "@/redux/features/todoSlice";
import { useUpdateTodoMutation } from "@/redux/api/api";
import UpdateTodoModal from "./UpdateTodoModal";
type TTodoProps = {
  _id: string;
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};
const TodoCard = ({
  _id,
  id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoProps) => {
  const dispatch = useAppDispatch();
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();

  const handleToggleState = () => {
    // dispatch(toggleTodoState(id));
    const payload = {
      id: _id,
      data: {
        id,
        title,
        description,
        isCompleted: !isCompleted,
        priority,
      },
    };
    updateTodo(payload);
  };
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input
        onChange={handleToggleState}
        type="checkbox"
        name="todoState"
        id="todoState"
        defaultChecked={isCompleted}
      />
      <p className="font-semibold flex-1 ml-2">{title}</p>
      {/* <p>time</p> */}
      <div className="flex items-center justify-start gap-2 flex-1">
        <div
          className={`size-3 rounded-full ${
            priority === "High" && "bg-red-500"
          } 
          ${priority === "Medium" && "bg-yellow-500"}
          ${priority === "Low" && "bg-green-500"}`}
        ></div>
        <p>{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500 font-semibold">Done</p>
        ) : (
          <p className="text-green-500  font-semibold">Pending</p>
        )}
      </div>
      <p className="flex-1">{description}</p>
      <div className="space-x-4">
        <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500">
          <svg
            className="size-5"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </Button>
        <UpdateTodoModal id={_id} />
      </div>
    </div>
  );
};
export default TodoCard;
