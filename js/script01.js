const clockElement = document.getElementById('clock');
const timeFormatElement = document.getElementById('timeFormat');
const fontSizeElement = document.getElementById('fontSize');
const textColorElement = document.getElementById('textColor');
const alarmTimeElement = document.getElementById('alarmTime');
const setAlarmButton = document.getElementById('setAlarm');
const alarmMessageElement = document.getElementById('alarmMessage');

let alarmTime = null;
let preferences = JSON.parse(localStorage.getItem('clockPreferences')) || {
    timeFormat: '12',
    fontSize: '48',
    textColor: '#333',
};

function updateClock() {
    const now = new Date();
    const hours = preferences.timeFormat === '12' ? now.getHours() % 12 || 12 : now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = preferences.timeFormat === '12' ? (now.getHours() >= 12 ? ' PM' : ' AM') : '';
    clockElement.textContent = `${hours}:${minutes}:${seconds}${ampm}`;

    if (alarmTime && `${now.getHours()}:${now.getMinutes()}` === alarmTime) {
        alarmMessageElement.textContent = 'Alarm Triggered!';
        alarmTime = null;
    }
}

function applyPreferences() {
    clockElement.style.fontSize = `${preferences.fontSize}px`;
    clockElement.style.color = preferences.textColor;
    timeFormatElement.value = preferences.timeFormat;
    fontSizeElement.value = preferences.fontSize;
    textColorElement.value = preferences.textColor;
}

function savePreferences() {
    localStorage.setItem('clockPreferences', JSON.stringify(preferences));
}

timeFormatElement.addEventListener('change', (e) => {
    preferences.timeFormat = e.target.value;
    savePreferences();
});

fontSizeElement.addEventListener('input', (e) => {
    preferences.fontSize = e.target.value || '48';
    applyPreferences();
    savePreferences();
});

textColorElement.addEventListener('input', (e) => {
    preferences.textColor = e.target.value;
    applyPreferences();
    savePreferences();
});

setAlarmButton.addEventListener('click', () => {
    alarmTime = alarmTimeElement.value;
    if (alarmTime) {
        alarmMessageElement.textContent = `Alarm set for ${alarmTime}`;
    } else {
        alarmMessageElement.textContent = 'Please set a valid alarm time.';
    }
});

applyPreferences();
setInterval(updateClock, 1000);