// Utilities.ts

export function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

export function isEmailValid(email: string): boolean {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

// Example usage
console.log(capitalizeFirstLetter("hello")); // Output: Hello
console.log(reverseString("hello")); // Output: olleh
console.log(isEmailValid("test@example.com")); // Output: true
