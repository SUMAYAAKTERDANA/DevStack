
Name of my project: DevStack 


Description:
DevStack is a modern web application that allows developers to curate their own personalized technology stack. Users can browse through various tools and technologies (like React, Node.js, Docker, etc.), filter them, and add them to their personal "Stack". It provides a seamless and interactive way to organize the tools needed for a specific project, complete with real-time toast notifications and a beautiful user interface.

 Technology that i use:

This project is built using the following technologies:
   **Frontend: React (with TypeScript)
   **Styling:Tailwind CSS & DaisyUI
   **Build Tool:Vite
   **Icons: React Icons
   **Notifications: React-Toastify
   **Data Source:Local JSON file (simulating an API)

3 features about my project:

1.  **Interactive Stack Management:Users can easily add technologies to their stack, remove individual items, or clear the entire stack with a single click.
2.  **Real-time Feedback (Toast Alerts):Integrated `react-toastify` provides instant visual feedback for every action — whether a user successfully adds a tool, tries to add a duplicate, removes an item, or clears the stack.
3.  **Fully Responsive & Modern UI: Built with Tailwind CSS and DaisyUI, the application features a sleek design, a custom gradient brand theme, and a layout that adapts perfectly to mobile, tablet, and desktop screens.



#  React Concept Questions 

1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension that allows us to write HTML-like code directly inside JavaScript. It is used in React because it makes the code easier to read and write by visually separating the UI structure (HTML) from the logic (JavaScript). Instead of using complex `React.createElement()` functions, we can just write `<div>Hello</div>`.

2. What is the difference between props and state?
Props (Properties) are read-only data passed from a parent component to a child component. They are used to pass data down the component tree. 

State is data that is managed inside a component itself. Unlike props, state is mutable (it can be changed) using the `useState` hook, and when it changes, the component re-renders.

3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to have local state variables. It returns an array with the current state value and a function to update it. In this project, I used `useState` to manage the list of technologies added to the user's "Stack", the loading state while fetching data, and the button toggle states.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook lets you perform side effects in your components, such as fetching data, setting up subscriptions, or manually changing the DOM. I used it to load the local JSON data. Since fetching data is an asynchronous side effect that should only happen once when the component mounts, `useEffect` with an empty dependency array `[]` is the perfect place to trigger the data fetch.

5. Why does every item in a `.map()` list need a unique key prop?

The `key` prop is a special string attribute that helps React identify which items in a list have changed, been added, or been removed. By giving each item a unique key, React can efficiently update only the specific DOM elements that need updating, rather than re-rendering the entire list. It boosts performance and prevents UI bugs.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means displaying different UI elements based on certain conditions (like if a variable is true or false). In this project, I used conditional rendering to show the "Your stack is empty" message. If the stack length is 0, it renders the empty message; otherwise, it renders the list of added technologies. I also used it to show the loading spinner while the data was being fetched.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from parent to child using props. The parent adds attributes to the child component (e.g., `<Child data={myData} />`), and the child accesses them via `props.data`.
To send data back from child to parent, the parent passes a callback function as a prop to the child (e.g., `<Child onSend={handleSend} />`). The child then calls this function with the required data (e.g., `props.onSend(childData)`), which triggers the function in the parent component.

