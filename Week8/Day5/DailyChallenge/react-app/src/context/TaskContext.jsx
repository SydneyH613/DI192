import { createContext, useReducer } from 'react';

const TaskContext = createContext();

const initialState = {
  tasks: [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Task Manager', completed: true },
    { id: 3, text: 'Add edit and filter features', completed: false },
  ],
  filter: 'all',
};

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };

    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        ),
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
