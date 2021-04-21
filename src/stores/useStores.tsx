import TodoStore from "./TodoStore";

const useStores = () => {
  return {
    todo: TodoStore,
  };
};

export default useStores;
