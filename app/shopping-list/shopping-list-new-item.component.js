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
    var ShoppingListNewItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent() {
                    this.item = { name: '', amount: 0 };
                    this.itemAdded = new core_1.EventEmitter();
                }
                ShoppingListNewItemComponent.prototype.onClick = function () {
                    this.itemAdded.emit(this.item);
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n      <div class=\"input\">\n        <label for=\"item-name\"> Name </label>\n        <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n      </div>\n      <div class=\"input\">\n        <label for=\"item-amt\"> Amount </label>\n        <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n      </div>\n      <button (click)= \"onClick()\"> Add Item </button>\n  ",
                        outputs: ['itemAdded']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQUE7b0JBQ0UsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0JBQzdCLGNBQVMsR0FBRSxJQUFJLG1CQUFZLEVBQVksQ0FBQztnQkFLMUMsQ0FBQztnQkFIQyw4Q0FBTyxHQUFQO29CQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkF2Qkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsOFlBVVQ7d0JBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUV2QixDQUFDOztnREFBQTtnQkFTRixtQ0FBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsdUVBT0MsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gXCIuLi9saXN0LWl0ZW1cIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0LW5ldy1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+IE5hbWUgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tYW10XCI+IEFtb3VudCA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW10XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIChjbGljayk9IFwib25DbGljaygpXCI+IEFkZCBJdGVtIDwvYnV0dG9uPlxuICBgLFxuICBvdXRwdXRzOiBbJ2l0ZW1BZGRlZCddXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50IHtcbiAgaXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTtcbiAgaXRlbUFkZGVkPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtPigpO1xuXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5pdGVtQWRkZWQuZW1pdCh0aGlzLml0ZW0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
