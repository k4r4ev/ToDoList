import { createStore } from "redux";
import { rootReducer } from "../reducers/reducers";

const saveToLocalStorage = (store) => {
  localStorage.removeItem("storage");
  localStorage.setItem("storage", JSON.stringify(store.main));
};

const store = createStore(rootReducer);

export default store;

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
