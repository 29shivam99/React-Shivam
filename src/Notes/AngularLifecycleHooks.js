// when angular finds a component selector (like <app-product></app-product>) then angular will instantiate the product component. And angular goes through different phases once in this instance creation process. It also gives us some methods that are triggred once the corresponding phase comes. These methods are calles as angular lifecycle hooks.

//Life cycle of angular components begins when the angular creates component class. "Constrcutor" is the first method that is invoked. Contructor is used for dependency injection and constructor is not a life cycle hook. When a constructor is called then none of the input props are ready to use, child components are also not constructed/ not ready. Projected contents are also not available. So we cant do much in constructor.

//ngOnChanges

//ngOnInit

// change detection cycle-
// it is a mechanism by which the angluar keeps template in sync with component
{
  /* <div>{{ count }}</div>; */
}

// angular will keep the value of count in component and template in sync

// it does so by running a change detection cycle every time a event occurs that may result in change in DOM like - @input change, DOM changes like event listeners, setTimeout setinterval, http calls. In each cycle it checks the bound properties in template and if there are any changes the it updates DOM.

//ng-template-

// it is an angular element that wraps some html inside it. And this html can be rendered in DOM and to render it we can tell angular when to render it.

//ex-

// using ngTemplateOutlet structural directive
{
  /* <ng-template #myTemplate>
    <div>
      <p>This will be rendered when we tell angular</p>
    </div>
  </ng-template> 

  <div *ngTemplateOutlet>I am rendered via template outlet!</div> */
}

// usning ngIf structural directive

{
  /*<buttton *ngIf="data.isAvailable; else useMe"> CLick me</buttton> 
    <ng-template #useMe>
      <button>Notify Me </button>
    </ng-template>
  */
}

// using ngIf

{
  /* <ng-template *ngIf="condition"><div>Content to render when condition is
true.</div></ng-template> */
}

// we can also use ngFor

//!data binding-

//it allows to communincate between angular component and its view and vice-versa.
// one way data binding and 2 way data binding

// 1 way- when the data can be accessed from view to component or vice versa. That is data can flow either from view to component or vice versa.
// view to component- event binding.
// component to view- {{data}} and [property]=data. String interpolation and Property binding

// 2way - it binds the data from component to view and view to componetn as well. it is combination of property bindinf and event bindiing
// [(ngModel)]

// property binding-

/* <img [src] = "imgSrcName"/> */

/* <button [disabled]="isDisabled"></button> */

// <input [value]="personName">

//! Directives-
// Directives are instructions to DOM.
// Manipulates the DOM

// component directive- @Component - since we have a 'select' for a component so we are instructing DOM to render that template where we have used the 'select' of that component.

// attribute directive- used to change appearance/behaviour of an DOM element. It does not add/remove html from DOM. ex ngStyle or ngClass

// structural directive - used to add/remove the DOM elements. Ex *ngIf. *ngClass

// custom directive-

{
  /* <div changeToGreen></div>;

//=======

@Directive({
  selector: "[changeToGreen]",
})
export class changeToGreen {} */
}

// Template reference variable - It is a variable that stores the reference of a DOM element, component or directive on which it is used.

//! @ViewChild DECORATOR - this is used to get a reference of a DOM element in the component and this basically returns the first matching element.

// in html

/* <div>
  <input #inputEle/>
  <button (onClick)="handleClick()">Click</button>
</div>; */

// in TS

// export class MyPage {
//   constructor() {}

//   @ViewChild("inputEle") searchInput: ElementRef; //-> ViewChild takes 2 arguments , first is the required and it is the reference and second is optional (if u want to learn about it then google it )
// }

// function handleClick() {
//   this.searchText = this.searchInput.nativeElement.value;
// }

//////////! @ViewChild with component

// parent html

{
  /* <div>
  <app-child-1></app-child-1>
  <app-child-2></app-child-2>
</div>; */
}

// parent TS

// @ViewChild(Child1Component) child1Component : Child1Component

// ngOnInit(){
//   console.log(child1Component);
// }

//! if we want that our child 2 has to get some data from the child 1 (child1 and child2 are siblings) then in that case we can use @ViewChild and get reference to the child1 in the parent like we did above and in child2 we can create 1 input prop and then parent passes the property which was needed from child1 to child2  like this -

// parent html

{
  /* <div>
  <app-child-1></app-child-1>
  <app-child-2 [takeCount]="countFromChild1"></app-child-2>
</div>; */
}

// parent TS

// @ViewChild(Child1Component) child1Component : Child1Component
// countFromChild1;
// ngOnInit(){
//   console.log(child1Component);
//   this.countFromChild1 = this.child1Component.count;
// }

// child2 TS

// @Input() takeCount;

//! @ViewChildren DECORATOR - this is used to get a reference of a DOM element in the component and this basically returns all the matching element. The diff from ViewChild is that it returns all matching results
