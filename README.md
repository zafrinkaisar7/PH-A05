## 📝 Questions & Answers

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

👉 (এখানে তুমি নিজের ভাষায় লিখবে — যেমন 
`getElementById`
 শুধু id দিয়ে কাজ করে, 
`getElementsByClassName`
 একাধিক element দেয় HTMLCollection আকারে, আর 
`querySelector`
 একটিমাত্র element দেয় CSS selector দিয়ে, 
`querySelectorAll`
 সব element দেয় NodeList আকারে।)

---

### 2. How do you create and insert a new element into the DOM?

👉 (এখানে লিখবে — যেমন 
`document.createElement()`
 দিয়ে element বানাই, তারপর 
`appendChild()`
 বা 
`prepend()`
 দিয়ে DOM এ insert করি।)

---

### 3. What is Event Bubbling and how does it work?

👉 (এখানে লিখবে — যেমন event bubbling মানে event প্রথমে ভিতরের element থেকে trigger হয় এবং ধীরে ধীরে parent element গুলোতেও propagate হয়।)

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

👉 (এখানে লিখবে — যেমন event delegation মানে parent element এ event listener বসিয়ে child elements এর events handle করা। Useful কারণ performance ভালো হয় আর dynamically created element এর event handle করা যায়।)

---

### 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

👉 (এখানে লিখবে — যেমন 
`preventDefault()`
 browser এর default কাজ বন্ধ করে (যেমন form submit হওয়া), আর 
`stopPropagation()`
 event কে parent element এ propagate হওয়া বন্ধ করে।)

---



