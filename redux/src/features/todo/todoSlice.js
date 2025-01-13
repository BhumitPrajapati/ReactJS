import { createSlice, nanoid } from "@reduxjs/toolkit";

//initalSlice is format or something for intial that how it look like
const initialState = {
  todos: [{ id: 1, text: "helloWorld" }],
};
//its big version of reducer
// -- but what is reducer
// -- its a funcnality

// Create Slice:

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // State & action are defult
    addTodo: (state, action) => {
      // action is thenew value which u added
      const todo = { id: nanoid(), text: action.payload };
      //state take old values from initalState and push new value
      console.log(todo.id);
      console.log(action.payload);

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});
//this export is used when we used in components
export const { addTodo, removeTodo } = todoSlice.actions;

//this is for store
// --every slice has to be register with store otherwise ther is no meaning of creating
export default todoSlice.reducer;
