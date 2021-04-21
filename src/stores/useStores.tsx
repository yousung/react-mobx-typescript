// import { MobXProviderContext } from "mobx-react";
// import { useContext } from "react";

import TodoStore from "./TodoStore";

const useStores = () => {
  return {
    todo: TodoStore,
  };
};

export default useStores;
