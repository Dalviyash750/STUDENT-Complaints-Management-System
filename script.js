```javascript
// ========================================
// STUDENT COMPLAINT MANAGEMENT SYSTEM
// Basic JavaScript
// ========================================


// Navbar active link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Login button message
const loginButton = document.querySelector(".login-btn");

if (loginButton) {

    loginButton.addEventListener("click", function () {

        console.log("Opening student login page...");

    });

}


// Complaint button
const complaintButtons = document.querySelectorAll(
    'a[href="complaint.html"]'
);

complaintButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log("Opening complaint submission page...");

    });

});


// Page loaded message
window.addEventListener("load", function () {

    console.log(
        "Student Complaint Management System loaded successfully."
    );

});
```
