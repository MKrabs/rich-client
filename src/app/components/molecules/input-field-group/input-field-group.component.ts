import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-field-group',
  templateUrl: './input-field-group.component.html',
})
export class InputFieldGroupComponent {

  @Input()
  inputId: string;
  @Input()
  label: string;
  @Input()
  text: string;
  @Output()
  textChange = new EventEmitter<string>();
}
