// Get DOM elements
const bgColorInput = document.getElementById('bg-color');
const textColorInput = document.getElementById('text-color');
const saveButton = document.getElementById('save');
const resetButton = document.getElementById('reset');

// Load preferences from localStorage
function loadPreferences() {
    const bgColor = localStorage.getItem('bgColor');
    const textColor = localStorage.getItem('textColor');

    if (bgColor) {
        document.body.style.backgroundColor = bgColor;
        bgColorInput.value = bgColor;
    }

    if (textColor) {
        document.body.style.color = textColor;
        textColorInput.value = textColor;
    }
}

// Save preferences to localStorage
function savePreferences() {
    const bgColor = bgColorInput.value;
    const textColor = textColorInput.value;

    localStorage.setItem('bgColor', bgColor);
    localStorage.setItem('textColor', textColor);

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;

    alert('Preferences saved!');
}

// Reset preferences
function resetPreferences() {
    localStorage.removeItem('bgColor');
    localStorage.removeItem('textColor');
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    bgColorInput.value = '#ffffff';
    textColorInput.value = '#000000';
    alert('Preferences reset!');
}

// Add event listeners
saveButton.addEventListener('click', savePreferences);
resetButton.addEventListener('click', resetPreferences);

// Load preferences on page load
loadPreferences();