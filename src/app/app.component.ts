import { Component } from '@angular/core';
import { PasswordService } from './password.service';
import { PasswordDisplayComponent } from './password-display/password-display.component';
import { OptionsComponent } from './options/options.component';
import { StrengthMeterComponent } from './strength-meter/strength-meter.component';
import { GenerateButtonComponent } from './generate-button/generate-button.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    PasswordDisplayComponent,
    OptionsComponent,
    StrengthMeterComponent,
    GenerateButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  strength: string = 'MEDIUM';
  options: any = {
    length: 10,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true
  };

  constructor(private passwordService: PasswordService) {}

  updateOptions(options: any) {
    this.options = options;
  }

  generatePassword() {
    this.password = this.passwordService.generatePassword(this.options);
    this.updateStrength();
  }

  updateStrength() {
    const length = this.password.length;
    if (length < 8) {
      this.strength = 'WEAK';
    } else if (length < 12) {
      this.strength = 'MEDIUM';
    } else {
      this.strength = 'STRONG';
    }
  }
}
