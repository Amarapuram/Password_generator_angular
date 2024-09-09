import { Component,Input,OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-strength-meter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strength-meter.component.html',
  styleUrl: './strength-meter.component.css'
})

export class StrengthMeterComponent implements OnChanges {
  @Input() strength: string = 'MEDIUM';
  boxCount: number = 0;
  boxes: number[] = [0, 1, 2, 3]; // Four boxes for visual strength indicator

  ngOnChanges() {
    switch (this.strength) {
      case 'WEAK':
        this.boxCount = 1;
        break;
      case 'MEDIUM':
        this.boxCount = 3;
        break;
      case 'STRONG':
        this.boxCount = 4;
        break;
      default:
        this.boxCount = 0;
        break;
    }
  }
}
