# nb-github-train

## Project Overview
This is a personal portfolio web application built with React. It features animated social icons, smooth scrolling navigation, and modular components for easy customization.

---

# GitHub Copilot Features (with Examples)

GitHub Copilot is an AI-powered code completion tool that helps you write code faster and smarter. Here are its main features, explained briefly and with examples:

## 1. Code Autocompletion
Copilot suggests code as you type, including entire lines or blocks.

**Example:**
```javascript
// You start typing:
function add(a, b) {
  // Copilot suggests:
  return a + b;
}
```

## 2. Multi-line Function Suggestions
Copilot can generate whole functions or classes from comments or function signatures.

**Example:**
```python
# Calculate factorial of a number
def factorial(n):
    # Copilot suggests:
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
```

## 3. Code Snippets from Comments
Write a comment describing what you want, and Copilot generates the code.

**Example:**
```javascript
// Create a React component that displays a greeting
// Copilot suggests:
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

## 4. Support for Many Languages & Frameworks
Copilot works with JavaScript, Python, TypeScript, Go, Ruby, Java, C#, and more, plus frameworks like React, Django, and Node.js.

## 5. Test Generation
Copilot can help write unit tests based on your code.

**Example:**
```python
# Test for add function
def test_add():
    assert add(2, 3) == 5
```

## 6. Code Refactoring Suggestions
Copilot can suggest more efficient or modern ways to write your code.

## 7. Repetitive Code Automation
For loops, data processing, and boilerplate code can be generated quickly.

**Example:**
```javascript
// Generate an array of numbers from 1 to 10
const arr = Array.from({ length: 10 }, (_, i) => i + 1);
```

## 8. Inline Documentation
Copilot can generate docstrings and comments for your functions.

**Example:**
```python
# Copilot suggests:
"""Returns the sum of two numbers."""
```

## 9. Context Awareness
Copilot uses the context of your file and project to make relevant suggestions.

## 10. IDE Integration
Works directly in VS Code, Neovim, JetBrains, and more.

---

## Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the app:
   ```sh
   npm start
   ```

---

## Learn More
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Copilot Labs](https://githubnext.com/projects/copilot-labs/)

---

*This project demonstrates how Copilot can accelerate modern web development!*

# Use GitHub Copilot to write JavaScript

Explore how you can modify a JavaScript repository using code suggestions from GitHub Copilot to modify and customize a web application. By working with this repository, you'll quickly get hands-on with a JavaScript web app for a portfolio site.

## Requirements

1. Enable your [GitHub Copilot service](https://github.com/github-copilot/signup)
1. NodeJS must be installed

