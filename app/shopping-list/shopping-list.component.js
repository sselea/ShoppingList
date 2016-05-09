System.register(["angular2/core", "./shopping-list-new-item.component", "./shopping-list-item.component", "./shopping-list.service"], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1, shopping_list_service_1;
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
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.listItems = this._shoppingListService.getItems();
                };
                ShoppingListComponent.prototype.onRemove = function () {
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n    <section>\n      <shopping-list-new-item> </shopping-list-new-item>\n    </section>\n    <section>\n      <h3> My List </h3>\n      <div class=\"list\">\n        <ul>\n          <li *ngFor= \"#listItem of listItems\" (click)= onSelect(listItem)> {{listItem.name}} ({{listItem.amount}}) </li>\n        </ul>\n      </div>\n    </section>\n    <section *ngIf=\"selectedItem != null\">\n      <shopping-list-item [item]= \"selectedItem\" (removed)= \"onRemove()\"> </shopping-list-item>\n    </section>\n  ",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent],
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBSUUsK0JBQW9CLG9CQUF5QztvQkFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFIN0QsY0FBUyxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7Z0JBRzhCLENBQUM7Z0JBRWpFLHdDQUFRLEdBQVIsVUFBUyxJQUFjO29CQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN4RCxDQUFDO2dCQUVELHdDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7Z0JBdENIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSwrZkFlVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywrREFBNEIsRUFBRSx3REFBeUIsQ0FBQzt3QkFDckUsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7cUJBQ2pDLENBQUM7O3lDQUFBO2dCQXNCRiw0QkFBQztZQUFELENBcEJBLEFBb0JDLElBQUE7WUFwQkQseURBb0JDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LW5ldy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tIFwiLi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uPlxuICAgICAgPHNob3BwaW5nLWxpc3QtbmV3LWl0ZW0+IDwvc2hvcHBpbmctbGlzdC1uZXctaXRlbT5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDM+IE15IExpc3QgPC9oMz5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgKm5nRm9yPSBcIiNsaXN0SXRlbSBvZiBsaXN0SXRlbXNcIiAoY2xpY2spPSBvblNlbGVjdChsaXN0SXRlbSk+IHt7bGlzdEl0ZW0ubmFtZX19ICh7e2xpc3RJdGVtLmFtb3VudH19KSA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uICpuZ0lmPVwic2VsZWN0ZWRJdGVtICE9IG51bGxcIj5cbiAgICAgIDxzaG9wcGluZy1saXN0LWl0ZW0gW2l0ZW1dPSBcInNlbGVjdGVkSXRlbVwiIChyZW1vdmVkKT0gXCJvblJlbW92ZSgpXCI+IDwvc2hvcHBpbmctbGlzdC1pdGVtPlxuICAgIDwvc2VjdGlvbj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1Nob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnQsIFNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtTaG9wcGluZ0xpc3RTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxpc3RJdGVtcyA9IG5ldyBBcnJheTxMaXN0SXRlbT4oKTtcbiAgc2VsZWN0ZWRJdGVtOiBMaXN0SXRlbTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7fVxuXG4gIG9uU2VsZWN0KGl0ZW06IExpc3RJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgbmdPbkluaXQoKTphbnkge1xuICAgIHRoaXMubGlzdEl0ZW1zID0gdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5nZXRJdGVtcygpO1xuICB9XG5cbiAgb25SZW1vdmUoKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICB9XG5cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
