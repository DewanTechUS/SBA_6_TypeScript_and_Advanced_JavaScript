# SBA 6 - TypeScript & Advanced JavaScript
- E-Commerce Product System (CLI App + Optional UI)
- Author: Dewan Mahmud (Rocky)
- Cohort: Per Scholas Software Engineering | 2025
- GitHub: https://github.com/DewanTechUS

# Project Overview

- This project is my completed work for SBA 6: TypeScript & Advanced JavaScript, and it represents the second fully planned version of my SBA. In my first attempt, I spent a lot of time experimenting, testing, and learning through mistakes, which helped me understand the concepts more deeply. Using that experience, I rebuilt the project in a more organized and structured way.

## I created an e-commerce product system that fetches real product data from the DummyJSON API and processes it using:

-   TypeScript
-   Object-Oriented Programming (OOP)
-   Async/Await
-   Custom Error Handling
-   Reusable Utility Modules

# The main application runs in the terminal (CLI) and prints:
-   product details
-   discount amount
-   discounted price
-   tax amount
-   final price

# I also created a optional UI using HTML/CSS/JavaScript, stored in the ui/ folder.
Later, I plan to connect the UI to the SBA

# Project Structure
src/
models/
- Product.ts
utils/
- discountCalculator.ts
- taxCalculator.ts
- errorHandler.ts
services/
- apiService.ts
index.ts
## (Optonal)
ui/
- index.html
- style.css
- ui.js

### Features Implemented
- TypeScript + Strong Typing
- Used interfaces and type annotations
- Enforced type safety across modules
## OOP Principles
-   Built a reusable Product class
-   Encapsulated properties through constructor
-   Added class methods for calculations and display
## Async Programming
-   Used async/await to fetch API data
-   Wrapped operations in try/catch
-   Added a custom ApiError class
## Modular Architecture
-   Separated logic into models, utils, services, and main
## CLI Output
-   Fetches products
-   Shows readable pricing breakdown
-   Demonstrates real-world async workflow
## Optional UI (Part 5) (I am working on it)
-   Basic HTML interface
-   JavaScript fetch logic
-   CSS styling + product cards

# Debugging Challenges & Solutions
1. Class Structure Errors
Accidentally placed methods outside the class due to an extra curly brace.
Fix: Matched braces carefully and cleaned structure.
2. “Cannot find module dist/index.js”
TypeScript didn’t compile because of earlier errors.
Fix: Ran npx tsc, fixed errors, recompiled.
3. Await Outside Async
Originally used await in the global file.
Fix: Moved everything inside async function main().
4. Plain Objects From API
API data didn’t include class behavior.
Fix: Converted into:
new Product(p)
5. UI Script Path Errors
Renamed file but forgot to update <script src="">.
Fix: Updated HTML to load ui.js.
These issues improved my debugging skills, error reading, and understanding of TypeScript flow.

# How to Run the CLI App
1. Compile TypeScript
npx tsc
2. Run the App
node dist/index.js

# How to Use the Optional UI (I will add this in future)

# Reflection
I implemented TypeScript features such as strong typing, interfaces, and modular architecture. I used OOP to structure the product logic cleanly through constructors, methods, and encapsulation. Asynchronous operations were handled using async/await with proper error management through a custom ApiError class.
During the project, I encountered multiple challenges including class structure issues, missing compiled files, async scope problems, and file path errors in the optional UI. I overcame these challenges through careful debugging, reading error messages, checking folder structure, and improving my code organization.
This SBA helped me build confidence in TypeScript, OOP, debugging, API handling, and designing real-world application structure.

# I will follow this video for UI
## GET Data from API & Display in HTML with JavaScript Fetch API
- https://www.youtube.com/watch?v=zUcc4vW-jsI

# Special thanks
A special thanks to my Per Scholas instructors Tishana Trainor and Bryan Santos for their clear explanations, patience, and constant support, and to my classmates for their teamwork, encouragement, and guidance throughout this journey, which helped me stay motivated and continue building confidence as a developer.