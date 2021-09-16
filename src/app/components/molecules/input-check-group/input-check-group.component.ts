import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-input-check-group',
    templateUrl: './input-check-group.component.html',
})
export class InputCheckGroupComponent {

    @Input()
    inputId: string;
    @Input()
    disabled = false;
    @Input()
    label: string;
    @Input()
    checked: boolean;
    @Output()
    checkedChange = new EventEmitter<boolean>();
}
