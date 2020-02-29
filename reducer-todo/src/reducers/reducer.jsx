export const initialState = {
  tasks: [
    {
      item: "Initial Item",
      completed: false,
      id: Date.now()
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = {
        item: action.payload,
        id: Date.now(),
        completed: false
      };
      return { ...state, tasks: [...state.tasks, newItem] };
    case "TOGGLE_ITEM":
      return {
        ...state,
        tasks: state.tasks.map(item => {
          if (action.payload === item.id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    case "CLEAR_SELECTED":
      return {
        ...state,
        tasks: state.tasks.filter(item => item.completed === false)
      };
    default:
      return state;
  }
};
