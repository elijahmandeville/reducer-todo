export const initialState = {
  tasks: [
    {
      item: "Initial Item",
      completed: false,
      id: Date.now()
    },
    {
      item: "Initial Item 2",
      completed: false,
      id: 121512512512
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(state.tasks);
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};
