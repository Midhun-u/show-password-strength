# About

A simple and efficient npm package to validate password strength using rules such as minimum length, numbers, lowercase letters, uppercase letters, and special characters.

# Features

* Validates password minimum length
* Checks for numeric characters
* Ensures lowercase letters are included
* Ensures uppercase letters are included
* Validates presence of special characters
* Simple and easy-to-use API
* Lightweight with zero external dependencies
* Works in both frontend and backend JavaScript applications
* Easy to integrate with any authentication or form validation flow

# Installation

```bash
npm install show-password-strength
```

# Usage

```js
import showPasswordStrength from 'show-password-strength'

const passwordStrengthOne = showPasswordStrength("midh", 6)
console.log(passwordStrengthOne) // {level: "weak", score: 25}

const passwordStrengthTwo = showPasswordStrength("midhun", 6)
console.log(passwordStrengthTwo) // {level: "medium", score: 33}

const passwordStrengthThree = showPasswordStrength("midhun123U", 6)
console.log(passwordStrengthThree) // {level: "strong", score: 50}

const passwordStrengthFour = showPasswordStrength("midhun123@U", 6)
console.log(passwordStrengthFour) // {level: "strong", score: 75}

const passwordStrengthFive = showPasswordStrength("Midhun123@whoam", 6)
console.log(passwordStrengthFive) // {level: "strong", score: 100}
```

# ISC License

Copyright (c) 2025 Midhun

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

Readme