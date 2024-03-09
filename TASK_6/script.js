function getDayOfWeek() {
    const dateString = document.getElementById("dateInput").value;
    const resultElement = document.getElementById("result");
    try {
        const dateObj = new Date(dateString);
        const dayOfWeek = dateObj.getDay();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        resultElement.textContent = `The day of the week for ${dateString} is ${daysOfWeek[dayOfWeek]}.`;
    } catch (error) {
        resultElement.textContent = "Invalid date format. Please provide the date in the format YYYY-MM-DD.";
    }
}
