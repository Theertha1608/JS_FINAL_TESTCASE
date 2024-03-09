function getDayOfWeek() {
    const dateString = document.getElementById("dateInput").value;
    const resultElement = document.getElementById("result");
    
    try {
        // Create a new Date object from the provided date string
        const dateObj = new Date(dateString);
        // Get the numeric representation of the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        const dayOfWeek = dateObj.getDay();
        // Array of weekday names
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        // Display the corresponding day of the week name
        resultElement.textContent = `The day of the week for ${dateString} is ${daysOfWeek[dayOfWeek]}.`;
    } catch (error) {
        resultElement.textContent = "Invalid date format. Please provide the date in the format YYYY-MM-DD.";
    }
}
