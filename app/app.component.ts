import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Haute Garbage</h1>
    <h2>Sick Recipes:</h2>
    <ul>
      <li [class]="ratingColor(firstFood)" (click)="isDone(firstFood)" *ngFor="let firstFood of garbageFoods">{{firstFood.description}}<button (click)="editRecipe(firstFood)">Click to edit a recipe!</button></li>
    </ul>
    <div>
      <div *ngIf="selectedFood">
        <h3>{{selectedFood.description}}</h3>
         <p>Task Complete? {{selectedFood.done}}</p>
        <h3>Edit Recipe</h3>
        <label>Enter Recipe Description:</label>
        <input [(ngModel)]="selectedFood.description">
         <label>Enter Food Score (1-3):</label>
         <br>
         <input type="radio" [(ngModel)]="selectedFood.trashScore" [value]="1">1 (Low Score)<br>
         <input type="radio" [(ngModel)]="selectedFood.trashScore" [value]="2">2 (Medium Score)<br>
         <input type="radio" [(ngModel)]="selectedFood.trashScore" [value]="3">3 (High Score)<br>
         <button (click)="finishedEditing()">Done (with you)</button>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  garbageFoods: garbageFood[] =[
    new garbageFood('Martha Stewart can afford a photographer?', 5),
    new garbageFood('So why is she doing this to us?', 2),
    new garbageFood('I am Upset.', 1),
  ];

  selectedFood = null;

  editRecipe(clickedFood) {
    this.selectedFood = clickedFood;
  }

  isDone(clickedFood: garbageFood) {
    if(clickedFood.done === true) {
      alert("this task is done!");
    } else {
      alert("this task is not done.")
    }
  }

  ratingColor(firstFood) {
    if (firstFood.trashScore >= 3) {
      return "bg-danger";
    } else if (firstFood.trashScore === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  finishedEditing() {
    this.selectedFood = null;
  }
}

export class garbageFood {
  public done: boolean = false;
  constructor(public description: string, public trashScore: number) { }
}
