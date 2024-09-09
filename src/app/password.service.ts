// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PasswordService {

//   constructor() { }

//   generatePassword(options: any): string {
//     const chars = {
//       uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//       lowercase: 'abcdefghijklmnopqrstuvwxyz',
//       numbers: '0123456789',
//       symbols: '!@#$%^&*()_+[]{}|;:,.<>?'
//     };

//     let charSet = '';
//     if (options.includeUppercase) charSet += chars.uppercase;
//     if (options.includeLowercase) charSet += chars.lowercase;
//     if (options.includeNumbers) charSet += chars.numbers;
//     if (options.includeSymbols) charSet += chars.symbols;

//     let password = '';
//     for (let i = 0; i < options.length; i++) {
//       const randomIndex = Math.floor(Math.random() * charSet.length);
//       password += charSet[randomIndex];
//     }

//     return password;
//   }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  generatePassword(options: any): string {
    const chars = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+[]{}|;:,.<>?'
    };

    let charSet = '';
    if (options.includeUppercase) charSet += chars.uppercase;
    if (options.includeLowercase) charSet += chars.lowercase;
    if (options.includeNumbers) charSet += chars.numbers;
    if (options.includeSymbols) charSet += chars.symbols;

    if (charSet.length === 0) {
      return ''; // If no characters are selected, return an empty string
    }

    let password = '';
    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }

    return password;
  }
}

