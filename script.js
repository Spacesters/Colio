// Disable Right Clicking
document.addEventListener('contextmenu', event => event.preventDefault());
// Disable pressing on any keys
document.onkeydown = function(e) {
        if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {}
        return false;
};