import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-password-display',
  standalone: true,
  imports: [],
  templateUrl: './password-display.component.html',
  styleUrl: './password-display.component.css'
})
export class PasswordDisplayComponent {
  @Input() password: string = '';
}
