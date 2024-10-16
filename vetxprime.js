function startTest(testName) {
    alert("Starting test: " + testName);
    // Redirect to a specific test page or implement test logic here
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message, " + document.getElementById("name").value + "!");
    this.reset(); // Reset form fields after submission
});
