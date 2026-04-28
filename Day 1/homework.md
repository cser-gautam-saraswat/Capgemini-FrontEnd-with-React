# Homework — React

**Date:** 25-04-2026  

---

## 1. Difference Between Library and Framework

**Answer:**  
The core difference is based on **control flow (Inversion of Control)**.

- **Library:**  
  You are in charge of the application flow and call the library functions when needed.

- **Framework:**  
  The framework controls the flow and executes your code at predefined points.

**Examples:**

- React → UI Library  
- Angular → Full-fledged Framework  

---

## 2. Latest Version of React

**Answer:**  
The latest version of React is **React 19 (19.2.5)**.

**Key Features:**

- **Actions:** Easier form handling and state updates  
- **`use` Hook:** Improved handling of asynchronous data  
- **Server Components:** Better performance and scalability  
- **Less Boilerplate:** Cleaner and simpler code  

---

## 3. React Project Folder Structure

**Answer:**  
A typical folder structure inside the `src/` directory:

- `assets/` → Static resources (images, fonts, icons)  
- `components/` → Reusable UI components  
- `configs/` → Configuration and environment setup  
- `hooks/` → Custom hooks  
- `context/` → Global state management  
- `services/` → API calls and integrations  
- `utils/` → Utility/helper functions  
- `styles/` → CSS or styling files  
- `App.jsx` → Root component  
- `main.jsx` → Entry point of the application  

**Why use this structure?**  
It helps in organizing code properly, making the application scalable and maintainable.

---

## 4. Create React App vs Vite

**Answer:**  

Both tools are used to initialize React projects but differ in performance and approach.

### Create React App (CRA)

- Uses Webpack  
- Bundles the entire app before running  
- Slower startup and rebuild times  

### Vite

- Uses native ES Modules  
- Loads files on demand  
- Uses esbuild for fast builds  

| Feature        | CRA                   | Vite                |
|----------------|----------------------|---------------------|
| Bundler        | Webpack              | ES Modules + esbuild |
| Startup Speed  | Slow                 | Instant             |
| Hot Reload     | Slower               | Very fast           |
| Build Process  | Full bundling        | On-demand           |
| Approach       | Traditional          | Modern              |

**Conclusion:**  
Vite is faster and more efficient for modern development.

---

## 5. SPA vs MPA

**Answer:**  

### Single Page Application (SPA)

- Loads a single HTML page  
- Updates content dynamically  
- No page reload during navigation  

### Multi Page Application (MPA)

- Loads a new page for every request  
- Requires server interaction on each navigation  

| Feature          | SPA                    | MPA                 |
|------------------|-----------------------|---------------------|
| Page Reload      | No                    | Yes                 |
| Routing          | Client-side           | Server-side         |
| Initial Load     | Slower                | Faster              |
| Navigation       | Fast                  | Slower              |
| SEO              | Needs optimization    | Easier              |
| User Experience  | Smooth                | Traditional         |

**Examples:**

- SPA → React, Angular  
- MPA → Traditional websites  

**Use Cases:**

- SPA → Dashboards, web apps  
- MPA → Content-heavy websites  

---

## 6. Virtual DOM, Diffing, and Reconciliation

**Answer:**  

These concepts describe how React efficiently updates the UI.

### Virtual DOM

A lightweight in-memory representation of the real DOM that helps reduce direct DOM manipulation.

### Diffing Algorithm

React compares the previous Virtual DOM with the updated one to detect changes.

### Reconciliation

The process of updating only the necessary parts of the real DOM based on detected differences.

### Workflow:

1. State or props change  
2. New Virtual DOM is created  
3. Diffing compares old vs new  
4. Changes are identified  
5. Real DOM is updated selectively  

**Why it matters:**  
This process improves performance by avoiding unnecessary updates and ensures a faster UI.