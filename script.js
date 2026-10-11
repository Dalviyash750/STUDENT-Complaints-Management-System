```javascript
// ==========================================
// STUDENT COMPLAINT MANAGEMENT SYSTEM
// JavaScript Functionality
// ==========================================


// 1. NAVBAR ACTIVE LINK

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


// 2. SMOOTH SCROLLING

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


// 3. LOGIN BUTTON MESSAGE

const loginButton = document.querySelector(".login-btn");

if (loginButton) {
    loginButton.addEventListener("click", function () {
        console.log("Opening student login page...");
    });
}


// 4. COMPLAINT PAGE LINK MESSAGE

const complaintButtons = document.querySelectorAll(
    'a[href="complaint.html"]'
);

complaintButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        console.log("Opening complaint submission page...");
    });
});


// 5. COMPLAINT FORM VALIDATION

const complaintForm = document.getElementById("complaintForm");

if (complaintForm) {
    complaintForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const studentName =
            document.getElementById("studentName").value.trim();

        const studentEmail =
            document.getElementById("studentEmail").value.trim();

        const category =
            document.getElementById("category").value;

        const subject =
            document.getElementById("subject").value.trim();

        const description =
            document.getElementById("description").value.trim();

        const formMessage =
            document.getElementById("formMessage");

        // Check required fields

        if (
            !studentName ||
            !studentEmail ||
            !category ||
            !subject ||
            !description
        ) {
            formMessage.textContent =
                "Please fill in all required fields.";

            formMessage.style.display = "block";
            formMessage.style.background = "#fff0f0";
            formMessage.style.color = "#c62828";
            formMessage.style.border = "1px solid #f5c2c2";

            return;
        }

        // Validate email format

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(studentEmail)) {
            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.display = "block";
            formMessage.style.background = "#fff0f0";
            formMessage.style.color = "#c62828";
            formMessage.style.border = "1px solid #f5c2c2";

            return;
        }

        // Show confirmation

        formMessage.textContent =
            "Form validation successful! PHP and database integration will be added next.";

        formMessage.style.display = "block";
        formMessage.style.background = "#e9f8ef";
        formMessage.style.color = "#168347";
        formMessage.style.border = "1px solid #c9edd7";

        formMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        console.log("Complaint form validation successful.");
    });
}


// 6. PAGE LOADED MESSAGE

window.addEventListener("load", function () {
    console.log(
        "Student Complaint Management System loaded successfully."
    );
});
```