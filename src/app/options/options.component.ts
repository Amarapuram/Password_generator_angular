import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'] // Corrected from styleUrl to styleUrls
})
export class OptionsComponent {
  length: number = 10;
  includeUppercase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;

  @Output() optionsChanged = new EventEmitter<any>();

  // Emit options when any value changes
  emitOptions() {
    this.optionsChanged.emit({
      length: this.length,
      includeUppercase: this.includeUppercase,
      includeLowercase: this.includeLowercase,
      includeNumbers: this.includeNumbers,
      includeSymbols: this.includeSymbols
    });
  }

  // Call emitOptions when any property changes
  onOptionChange() {
    this.emitOptions();
  }
}

