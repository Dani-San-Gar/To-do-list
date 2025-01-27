import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [CommonModule,FormsModule]
})
export class TodoComponent {
  newTask: string = ''; // Tarea nueva
  tasks: { text: string; completed: boolean }[] = []; // Lista de tareas
  filteredTasks: { text: string; completed: boolean }[] = []; // Lista filtrada
  currentFilter: string = 'all'; // Filtro actual

  constructor() {
    this.updateFilter();
  }

  // agregar una tarea
  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask.trim(), completed: false });
      this.newTask = '';
      this.updateFilter();
    }
  }

  // eliminar una tarea
  deleteTask(task: { text: string; completed: boolean }): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.updateFilter();
  }

  // filtrar las tareas
  filterTasks(filter: string): void {
    this.currentFilter = filter;
    this.updateFilter();
  }

  // actualizar la lista filtrada
  updateFilter(): void {
    if (this.currentFilter === 'all') {
      this.filteredTasks = [...this.tasks];
    } else if (this.currentFilter === 'pending') {
      this.filteredTasks = this.tasks.filter(t => !t.completed);
    } else if (this.currentFilter === 'completed') {
      this.filteredTasks = this.tasks.filter(t => t.completed);
    }
  }
}