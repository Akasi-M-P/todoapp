// Function to update the time and date display
function upDateTime() {
    // Get the current date and time
    const now = new Date();

    // Format time (HH:MM:SS)
    const time = now.toLocaleTimeString();
    // Update the time display element with the formatted time
    document.getElementById("time").textContent = time;

    // Format date (Day, Month DD, YYYY)
    const date = now.toLocaleDateString();
    // Update the date display element with the formatted date
    document.getElementById("date").textContent = date;
}

// Call upDateTime() once immediately to initialize the time and date display
upDateTime();

// Set up a timer to call upDateTime() every 1000 milliseconds (1 second)
setInterval(upDateTime, 1000);
