function updateTime() {
    const utcTimeElement = document.getElementById('utc-time');
    const currentDayElement = document.getElementById('current-day');
    
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4]; // Extract the time part
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getUTCDay()];
    
    utcTimeElement.textContent = utcTime;
    currentDayElement.textContent = currentDay;
}

setInterval(updateTime, 1000);
updateTime();
