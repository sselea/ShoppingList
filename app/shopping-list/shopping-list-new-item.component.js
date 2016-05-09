System.register(["angular2/core", "./shopping-list.service", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1, common_1, common_2;
    var ShoppingListNewItemComponent;
    function greaterZero(control) {
        if (control.value <= 0) {
            return { notEnough: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent(_shoppingListService, _formBuilder) {
                    this._shoppingListService = _shoppingListService;
                    this._formBuilder = _formBuilder;
                    this.item = { name: '', amount: 0 };
                }
                ShoppingListNewItemComponent.prototype.onSubmit = function () {
                    this._shoppingListService.insertItem({ name: this.item.name, amount: this.item.amount });
                };
                ShoppingListNewItemComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'itemName': ['', common_2.Validators.required],
                        'itemAmount': ['', common_2.Validators.compose([
                                common_2.Validators.required,
                                greaterZero
                            ])]
                    });
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n      <form [ngFormModel]= \"myForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"input\">\n          <label for=\"item-name\"> Name </label>\n          <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\" [ngFormControl]= \"myForm.controls['itemName']\">\n        </div>\n        <div class=\"input\">\n          <label for=\"item-amt\"> Amount </label>\n          <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\" [ngFormControl]= \"myForm.controls['itemAmount']\">\n        </div>\n        <button type=\"submit\" [disabled]=\"!myForm.valid\"> Add Item </button>\n      </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, common_1.FormBuilder])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFrREEscUJBQXFCLE9BQWdCO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7O1lBMUJEO2dCQUlFLHNDQUFvQixvQkFBeUMsRUFBVSxZQUF5QjtvQkFBNUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIaEcsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBSTdCLENBQUM7Z0JBRUQsK0NBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7Z0JBQ3pGLENBQUM7Z0JBRUQsK0NBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNwQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3JDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDcEMsbUJBQVUsQ0FBQyxRQUFRO2dDQUNuQixXQUFXOzZCQUNaLENBQUMsQ0FBQztxQkFDSixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFyQ0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsMm1CQVlUO3FCQUVGLENBQUM7O2dEQUFBO2dCQXNCRixtQ0FBQztZQUFELENBcEJBLEFBb0JDLElBQUE7WUFwQkQsdUVBb0JDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LW5ldy1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSBcIi4uL2xpc3QtaXRlbVwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7Q29udHJvbEdyb3VwfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtWYWxpZGF0b3JzfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1uZXctaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPSBcIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj4gTmFtZSA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIiBbbmdGb3JtQ29udHJvbF09IFwibXlGb3JtLmNvbnRyb2xzWydpdGVtTmFtZSddXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1hbXRcIj4gQW1vdW50IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtdFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIiBbbmdGb3JtQ29udHJvbF09IFwibXlGb3JtLmNvbnRyb2xzWydpdGVtQW1vdW50J11cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+IEFkZCBJdGVtIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICBgXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTtcbiAgbXlGb3JtOiBDb250cm9sR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSwgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluc2VydEl0ZW0oe25hbWU6IHRoaXMuaXRlbS5uYW1lLCBhbW91bnQ6IHRoaXMuaXRlbS5hbW91bnR9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6YW55e1xuICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ2l0ZW1OYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICdpdGVtQW1vdW50JzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICBncmVhdGVyWmVyb1xuICAgICAgXSldXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ3JlYXRlclplcm8oY29udHJvbDogQ29udHJvbCk6IHtbczpzdHJpbmddOiBib29sZWFufSB7XG4gIGlmIChjb250cm9sLnZhbHVlIDw9IDApIHtcbiAgICByZXR1cm4ge25vdEVub3VnaDogdHJ1ZX07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
