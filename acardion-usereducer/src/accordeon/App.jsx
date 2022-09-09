import { useReducer } from "react";
import AccForm from "./AccForm";
import AccItem from "./AccItem";

const items = [
  {
    id: Math.random(),
    title: "Armenia",
    content: "Helo i am from Erevan",
    isActive: false,
  },
  {
    id: Math.random(),
    title: "Russia",
    content: "Helo i am from Russia",
    isActive: false,
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "OPEN":
      return state.map((item) =>
        item.id === action.payload.id ? action.payload.newItem : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.payload.id);
    case "ADD":
      return [...state, action.payload.addedItem];
    default:
      return state;
  }
}
function App() {
  const [infos, dispatch] = useReducer(reducer, items);

  return (
    <div className="App">
      <AccForm dispatch={dispatch} />
      {infos?.map((item) => (
        <AccItem key={item.id} item={item} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default App;
