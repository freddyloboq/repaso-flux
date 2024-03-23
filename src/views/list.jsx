import {useContext, useEffect} from 'react'
import {Context} from '../store/appContext.jsx'
import { toast } from "react-toastify";

const List = () => {
// useState
  const { store, actions } = useContext(Context);
  // const [todoList, setTodoList] = useState([])

    const notify = () =>
      toast.success("🦄 Se envio la tarea!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // const notify = () => toast("Se envio la tarea!");

  useEffect(() => {
    actions.getTodoFetch();
  }, [store.messages]);

  return (
    <>
      <h1>Task</h1>
      <input
        onChange={actions.handleChange}
        onKeyDown={(e) =>{
          actions.postTodosFetch(e, [...store.todosFetch, store.task], notify),
          notify}
        }
        type="text"
        name="task"
        id="task"
        value={store.task?.label}
      />
      <ul>
        {Array.isArray(store.todosFetch) &&
          store.todosFetch?.map((task) => {
            return <li key={task.id}> {task.label} </li>;
          })}
      </ul>
    </>
  );
};

export default List;
