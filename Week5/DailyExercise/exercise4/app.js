import { TodoList } from './todo.js';

const todo = new TodoList();

todo.addTask("Study Node");
todo.addTask("Go shopping");

todo.markComplete("Study Node");

todo.listTasks();
