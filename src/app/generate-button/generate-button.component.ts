import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generate-button',
  standalone: true,
  imports: [],
  templateUrl: './generate-button.component.html',
  styleUrl: './generate-button.component.css'
})
export class GenerateButtonComponent {
  @Output() generate = new EventEmitter<void>();

  generatePassword() {
    this.generate.emit();
  }
}
