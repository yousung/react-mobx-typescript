import { action, computed, makeObservable, observable } from "mobx";

export interface ITodo {
  id: number;
  content: string;
  checked: boolean;
}

class Todo {
  currentId: number = 100;

  @observable
  todoData: ITodo[] = [
    { id: 1, content: "test", checked: false },
    { id: 2, content: "test2", checked: false },
    { id: 3, content: "test3", checked: false },
    { id: 4, content: "test4", checked: false },
  ];

  constructor() {
    makeObservable(this);
  }

  @action
  addTodo(content: string): void {
    this.todoData.push({
      id: this.currentId++,
      content,
      checked: false,
    });
  }

  @action
  removeTodo(id: number): void {
    const todoIndex = this.findIndex(id);
    if (todoIndex !== -1) {
      this.todoData.splice(todoIndex, 1);
    }
  }

  @action
  toggleTodo(id: number): void {
    const todoIndex = this.findIndex(id);
    if (todoIndex !== -1) {
      this.todoData[todoIndex].checked = !this.todoData[todoIndex].checked;
    }
  }

  @computed get totalCount(): number {
    return this.todoData.length;
  }

  findIndex(id: number): number {
    const todoIndex = this.todoData.findIndex((todo) => todo.id === id);
    return todoIndex;
  }
}

const TodoStore = new Todo();
export default TodoStore;
