## Questions & Answers

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?


`getElementById`
 works only with id while, 
`getElementsByClassName`
 gives multiple elements as like HTMLCollection, and
`querySelector`
 gives only one element with the CSS selector, and 
`querySelectorAll`
 gives all the element as like NodeList.

---

### 2. How do you create and insert a new element into the DOM?

at first we create an element with
`document.createElement()`
 then we append a child from it like
`appendChild()`
 or we use
`prepend()`
 and insert DOM with it.

---

### 3. What is Event Bubbling and how does it work?

Event bubbling is a JavaScript (and web) event propagation mechanism where an event triggered on a specific child element first triggers its own event handler, then "bubbles up" through its parent, grandparent, and other ancestors up to the document's root. This process allows parent elements to respond to events that occurred on their descendants, and it is the default method for handling events in the Document Object Model (DOM). 


---

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation in JavaScript is a technique for handling events efficiently, particularly in scenarios involving a large number of elements or dynamically added content. Instead of attaching a separate event listener to each individual element, a single event listener is attached to a common ancestor (parent) element
---

### 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

preventDefault() and stopPropagation() are distinct methods of the Event interface in JavaScript, used to control event behavior in web browsers. 

event.preventDefault():
This method prevents the default action that belongs to the event. For example, clicking on an <a> tag with an href attribute typically navigates the browser to the specified URL. Calling event.preventDefault() within the click event listener for that <a> tag will prevent this navigation, while still allowing other event listeners for that click to execute. Similarly, it can prevent a form from submitting when a submit button is clicked, or prevent the default context menu from appearing on a right-click.

event.stopPropagation():
This method prevents the event from propagating further in the DOM tree. When an event occurs on an element, it typically goes through a capturing phase (from the document root down to the target element) and then a bubbling phase (from the target element up to the document root). Calling event.stopPropagation() stops this propagation, meaning that any parent elements or other elements in the event flow that would normally receive the event will not receive it. This prevents their associated event listeners from being triggered.

---

### README file Added


