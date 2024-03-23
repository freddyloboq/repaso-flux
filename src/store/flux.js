const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      task: {
        label: "",
      },
      listOfTasks: [
        {
          label: "explicar Flux",
        },
      ],
      todosFetch: [],
      messages: "",
    },
    actions: {
      handleChange: (e) => {
        setStore({ task: { label: e.target.value, done: false } });
      },

      handleOnKeyDown: (e, task) => {
        const { listOfTasks } = getStore();

        if (e.key === "Enter") {
          setStore({ listOfTasks: [...listOfTasks, task] });
          setStore({ task: { label: "", done: false } });
        }
      },

      getTodoFetch: () => {
        fetch("https://playground.4geeks.com/apis/fake/todos/user/freddyloboq")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setStore({ todosFetch: data });
          })
          .catch((error) => {
            console.log("error", error);
          });
      },

      postTodosFetch: (e, todos, notify) => {
        if (e.key === "Enter") {
          fetch(
            "https://playground.4geeks.com/apis/fake/todos/user/freddyloboq",
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(todos),
            }
          )
            .then((response) => response.json())
            .then((data) => {
              setStore({ messages: data });
              notify
            })
            .catch((err) => {
              console.log("err", err);
            });
        }
      },
    },
  };
};

export default getState;



// Para limpiar la cache del navegador
// ctrl+shift+r