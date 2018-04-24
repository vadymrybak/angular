import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number;
  @Input() itemsPerPage: number;
  @Input() maxSize: number;
  @Input() displayFirstLast: boolean;
  @Output() onPageChanged: EventEmitter<number>;
  pageArray: Array<number> = new Array<number>();
  actualPageCount: number = 0;
  activePage: number = 1;
  redoGap: number = 2;

  constructor() { 
    this.onPageChanged = new EventEmitter();
  }

  ngOnInit() {    
    this.pageArray = [];
    //console.log("Total items: ", this.items);
    //console.log("Items per page: ", this.itemsPerPage);
    let pagesCount: number =  Math.ceil(this.totalItems / this.itemsPerPage);
    console.log("pagesCount: ", pagesCount);
    this.actualPageCount =  Math.ceil(pagesCount);
    for (let i = 0; i < pagesCount; i++){
      if (i < this.maxSize)
        this.pageArray.push(i + 1);
    } 
    //console.log("this.pageArray", this.pageArray);
  }

  ngOnChanges() {
    
  }

  changePage(pageIndex: number): void{
    this.activePage = pageIndex;
    this.onPageChanged.emit(this.activePage);
    this.buildPageArray();
    //console.log("activePage is:", this.activePage);
  }

  clicked(page: number, label: any): boolean {
    this.changePage(page);
    return false;
  } 

  prevClick():boolean {
    if (this.activePage > 1){
      this.activePage--;
      this.changePage(this.activePage);
    }
    return false;
  }

  nextClick(): boolean{
    if (this.activePage < this.actualPageCount){
      this.activePage++;
      this.changePage(this.activePage);
    }
    return false;
  }

  goToFirst(): boolean {
    if (this.activePage > 1){
      this.activePage = 1;
      this.changePage(this.activePage);
    }
    return false;
  }

  goToLast(): boolean {
    if (this.activePage < this.actualPageCount){
      this.activePage = this.actualPageCount;
      this.changePage(this.activePage);
    }
    return false;
  }

  buildPageArray(): void {
    this.pageArray = [];
    if (this.activePage >= this.maxSize - this.redoGap){
      //console.log("need to redo array");
      let start = this.activePage + 1 - this.redoGap;
      if (start > this.actualPageCount - this.maxSize){
        start = this.actualPageCount - this.maxSize + 1;
      }
      for (var i = start; i < this.activePage + this.maxSize - 1; i++){
        if (i <= this.actualPageCount && i > 0)
          this.pageArray.push(i);
      }
      //console.log("redone array is:", this.pageArray);
    }
    else if (this.activePage <= this.actualPageCount){
      //console.log("need to redo array 2");
      let pagesCount: number = Math.ceil(this.totalItems / this.itemsPerPage);
      for (let i = 0; i < pagesCount; i++){
        if (i < this.maxSize)
          this.pageArray.push(i + 1);
      } 
    }
    
    // let arrayStart = 0;
    // let arrayEnd = 0;
    // arrayStart = (activePage + 1) - this.maxSize;
    // this.pageArray = [];

    // console.log("arrayStart", arrayStart);
    // for(var i = arrayStart; i < arrayStart + this.maxSize; i++){
    //   this.pageArray.push(i);
    // }
    // console.log("pageArray rebuilt.", this.pageArray);
  }

}
