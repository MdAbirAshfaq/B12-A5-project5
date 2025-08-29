

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
getElementById is use to find element by its ID.
getElementsByClassName is use to find element by class name, it give a collection like array.
querySelector select first element by CSS selector. querySelectorAll select all element by CSS selector.


2. How do you **create and insert a new element into the DOM**?
First we use document.createElement to make new element.
Then we can add text or attribute inside it.
After that use appendChild() or append() to insert this element inside the parent.


3. What is **Event Bubbling** and how does it work?
Event bubbling is a behavior where an event starts from the target element and bubbles up through its parent elements, all the way up to the document.For Example if there is a button in body and we click on it, the click event will be go up through it's parent element body and then body's parent element html and we can capture the event even from the parent.



4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is a pattern based upon the concept of Event Bubbling.
Instead of adding an event listener to each and every similar elemtent, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.



5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() stops the browser's default action for an event (e.g., form submission or link navigation). stopPropagation() prevents the event from continuing to bubble up to ancestor elements.
