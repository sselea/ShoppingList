System.register(["angular2/core", "./shopping-list-new-item.component", "./shopping-list-item.component"], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_1_1) {
                shopping_list_new_item_component_1 = shopping_list_new_item_component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onRemove = function (item) {
                    this.listItems.splice(this.listItems.indexOf(item), 1);
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n    <section>\n      <shopping-list-new-item (itemAdded)= \"onItemAdded($event)\"> </shopping-list-new-item>\n    </section>\n    <section>\n      <h3> My List </h3>\n      <div class=\"list\">\n        <ul>\n          <li *ngFor= \"#listItem of listItems\" (click)= onSelect(listItem)> {{listItem.name}} ({{listItem.amount}}) </li>\n        </ul>\n      </div>\n    </section>\n    <section *ngIf=\"selectedItem != null\">\n      <shopping-list-item [item]= \"selectedItem\" (removed)=\"onRemove($event)\"> </shopping-list-item>\n    </section>\n  ",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQUE7b0JBQ0UsY0FBUyxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7Z0JBZ0JwQyxDQUFDO2dCQWJDLDJDQUFXLEdBQVgsVUFBWSxJQUFjO29CQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsd0NBQVEsR0FBUixVQUFTLElBQWM7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDM0IsQ0FBQztnQkFwQ0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLHlpQkFlVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywrREFBNEIsRUFBRSx3REFBeUIsQ0FBQztxQkFDdEUsQ0FBQzs7eUNBQUE7Z0JBbUJGLDRCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCx5REFpQkMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdEl0ZW1Db21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3QtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gXCIuLi9saXN0LWl0ZW1cIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24+XG4gICAgICA8c2hvcHBpbmctbGlzdC1uZXctaXRlbSAoaXRlbUFkZGVkKT0gXCJvbkl0ZW1BZGRlZCgkZXZlbnQpXCI+IDwvc2hvcHBpbmctbGlzdC1uZXctaXRlbT5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDM+IE15IExpc3QgPC9oMz5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgKm5nRm9yPSBcIiNsaXN0SXRlbSBvZiBsaXN0SXRlbXNcIiAoY2xpY2spPSBvblNlbGVjdChsaXN0SXRlbSk+IHt7bGlzdEl0ZW0ubmFtZX19ICh7e2xpc3RJdGVtLmFtb3VudH19KSA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uICpuZ0lmPVwic2VsZWN0ZWRJdGVtICE9IG51bGxcIj5cbiAgICAgIDxzaG9wcGluZy1saXN0LWl0ZW0gW2l0ZW1dPSBcInNlbGVjdGVkSXRlbVwiIChyZW1vdmVkKT1cIm9uUmVtb3ZlKCRldmVudClcIj4gPC9zaG9wcGluZy1saXN0LWl0ZW0+XG4gICAgPC9zZWN0aW9uPlxuICBgLFxuICBkaXJlY3RpdmVzOiBbU2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudCwgU2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnQge1xuICBsaXN0SXRlbXMgPSBuZXcgQXJyYXk8TGlzdEl0ZW0+KCk7XG4gIHNlbGVjdGVkSXRlbTogTGlzdEl0ZW07XG5cbiAgb25JdGVtQWRkZWQoaXRlbTogTGlzdEl0ZW0pIHtcbiAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKHtuYW1lOiBpdGVtLm5hbWUsIGFtb3VudDogaXRlbS5hbW91bnR9KTtcbiAgfVxuXG4gIG9uU2VsZWN0KGl0ZW06IExpc3RJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgb25SZW1vdmUoaXRlbTogTGlzdEl0ZW0pIHtcbiAgICB0aGlzLmxpc3RJdGVtcy5zcGxpY2UodGhpcy5saXN0SXRlbXMuaW5kZXhPZihpdGVtKSwxKTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
