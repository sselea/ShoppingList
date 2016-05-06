System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ShoppingListItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListItemComponent = (function () {
                function ShoppingListItemComponent() {
                    this.item = { name: '', amount: 0 };
                    this.removed = new core_1.EventEmitter();
                }
                ShoppingListItemComponent.prototype.onDelete = function () {
                    this.removed.emit(this.item);
                };
                ShoppingListItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-item',
                        template: "\n    <div class=\"input\">\n      <label for=\"item-name\"> Name </label>\n      <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n    </div>\n    <div class=\"input\">\n      <label for=\"item-amt\"> Amount </label>\n      <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n    </div>\n    <button class=\"danger\" (click)= \"onDelete()\"> Delete Item </button>\n  ",
                        inputs: ['item'],
                        outputs: ['removed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListItemComponent);
                return ShoppingListItemComponent;
            }());
            exports_1("ShoppingListItemComponent", ShoppingListItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFBQTtvQkFDRSxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDN0IsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO2dCQU96QyxDQUFDO2dCQUxDLDRDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQXhCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSxpWkFVVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFFckIsQ0FBQzs7NkNBQUE7Z0JBV0YsZ0NBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELGlFQVNDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gXCIuLi9saXN0LWl0ZW1cIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj4gTmFtZSA8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tYW10XCI+IEFtb3VudCA8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtdFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZGFuZ2VyXCIgKGNsaWNrKT0gXCJvbkRlbGV0ZSgpXCI+IERlbGV0ZSBJdGVtIDwvYnV0dG9uPlxuICBgLFxuICBpbnB1dHM6IFsnaXRlbSddLFxuICBvdXRwdXRzOiBbJ3JlbW92ZWQnXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudCB7XG4gIGl0ZW0gPSB7bmFtZTogJycsIGFtb3VudDogMH07XG4gIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtPigpO1xuXG4gIG9uRGVsZXRlKCkge1xuICAgIHRoaXMucmVtb3ZlZC5lbWl0KHRoaXMuaXRlbSk7XG4gIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
