System.register(["angular2/core", "./shopping-list.service"], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1;
    var ShoppingListItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListItemComponent = (function () {
                function ShoppingListItemComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.item = { name: '', amount: 0 };
                    this.removed = new core_1.EventEmitter();
                }
                ShoppingListItemComponent.prototype.onDelete = function () {
                    this._shoppingListService.deleteItem(this.item);
                    this.removed.emit(null);
                };
                ShoppingListItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-item',
                        template: "\n    <div class=\"input\">\n      <label for=\"item-name\"> Name </label>\n      <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n    </div>\n    <div class=\"input\">\n      <label for=\"item-amt\"> Amount </label>\n      <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n    </div>\n    <button class=\"danger\" (click)= \"onDelete()\"> Delete Item </button>\n  ",
                        inputs: ['item'],
                        outputs: ['removed']
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListItemComponent);
                return ShoppingListItemComponent;
            }());
            exports_1("ShoppingListItemComponent", ShoppingListItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFJRSxtQ0FBb0Isb0JBQXlDO29CQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUg3RCxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDN0IsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO2dCQUU4QixDQUFDO2dCQUVqRSw0Q0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDekIsQ0FBQztnQkEzQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsaVpBVVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO3dCQUNoQixPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUM7cUJBRXJCLENBQUM7OzZDQUFBO2dCQWNGLGdDQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCxpRUFZQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gXCIuLi9saXN0LWl0ZW1cIjtcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSBcIi4vc2hvcHBpbmctbGlzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+IE5hbWUgPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLWFtdFwiPiBBbW91bnQgPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1hbXRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uYW1vdW50XCI+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImRhbmdlclwiIChjbGljayk9IFwib25EZWxldGUoKVwiPiBEZWxldGUgSXRlbSA8L2J1dHRvbj5cbiAgYCxcbiAgaW5wdXRzOiBbJ2l0ZW0nXSxcbiAgb3V0cHV0czogWydyZW1vdmVkJ11cblxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnQge1xuICBpdGVtID0ge25hbWU6ICcnLCBhbW91bnQ6IDB9O1xuICByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSkge31cblxuICBvbkRlbGV0ZSgpIHtcbiAgICB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmRlbGV0ZUl0ZW0odGhpcy5pdGVtKTtcbiAgICB0aGlzLnJlbW92ZWQuZW1pdChudWxsKVxuICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
