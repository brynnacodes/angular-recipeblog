import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Haute Garbage</h1>
    <h2>Sick Recipes:</h2>
    <h3>{{firstFood.description}}</h3>
    <ul>
      <li [class]="ratingColor(firstFood)" (click)="isDone(firstFood)" *ngFor="let firstFood of garbageFoods">{{firstFood.description}}<button (click)="editRecipe()">Click to edit a recipe!</button></li>

    </ul>
  </div>
  `
})

export class AppComponent {
  garbageFoods: garbageFood[] =[
    new garbageFood('Martha Stewart can afford a photographer?', 5),
    new garbageFood('So why is she doing this to us?', 2),
    new garbageFood('I am Upset.', 1),
  ];

  editRecipe() {
    alert("You can't");
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
}

export class garbageFood {
  public done: boolean = false;
  constructor(public description: string, public trashScore: number) { }
}
