import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'wcu-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.scss']
})
export class ItemSectionComponent implements OnInit {

  @Input('item') item;
  @Input('level') level = 3;
  @Output(/* 'item-change' */) doneChange: EventEmitter<any> = new EventEmitter<any>();

  onDoneChange(item) {
    this.doneChange.emit(item.done);
  }

  constructor() {}

  ngOnInit() {
    // console.log(
    //   this.item.subItems.length
    //   ,
    //   this.item
    // );
  }

  isDone(item) {
    const self = this;
    console.log('isDone(', item.title, ');');
    return item.subItems.length ? areSubitemsAllDone() : item.done;


    function areSubitemsAllDone() {
      let result = true;

      const BreakException = {};
      try {
        item.subItems.forEach(function isSubItemDone(subitem) {
          if (!self.isDone(subitem)) {
            result = false;
            throw BreakException;
          }
        });
      } catch (e) {
        if (e !== BreakException) {
          throw e;
        };
      }

      return result;
    }
  }

  // onItemChange() {
  //   this.itemChange.emit(this.item);
  // }

  tick(item, state) {
    item.done = state;

    const self = this;
    if (item.subItems.length) {
      item.subItems.forEach(function tickSubItem(subItem) {
        self.tick(subItem, state);
      });
    } else {
      item.done = state;
    }

    this.onDoneChange(item);
  }

  setDone(state) {
    console.log('set done to ' + state, this.item.title);
    this.item.done = state;
    this.onDoneChange(this.item.done);
  }


  /** -------------------------------------------- */

  addFormIsOpen: boolean = false;
  openAddItemForm() {
    this.addFormIsOpen = true;
  }
  cancelAddItem() {
    this.addFormIsOpen = false;
  }
  addItem(newItemTitle, newItemDescription) {
    this.item.subItems.push({
      title: newItemTitle,
      description: newItemDescription,
      subItems: []
    });
  }
}
