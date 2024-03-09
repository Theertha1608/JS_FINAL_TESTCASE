document.getElementById("greetingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var greeting = "Hello, " + name + "! Welcome to the site!";

    alert(greeting);
});
