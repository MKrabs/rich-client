import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
})
export class InputFieldComponent {

    @Input()
    inputId: string;
    @Input()
    text = '';
    @Output()
    textChange = new EventEmitter<string>();
}
