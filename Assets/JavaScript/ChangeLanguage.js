// Handle language change
document.getElementById('languageSelector').addEventListener('change', function () {
    const selectedPath = this.value;
    // Redirect to the selected language subdirectory
    window.location.href = selectedPath;
});

// Auto-select current language in dropdown
(function setCurrentLanguage() {
    const currentPath = window.location.pathname;
    const selector = document.getElementById('languageSelector');
    for (let option of selector.options) {
        if (currentPath.startsWith(option.value)) {
            option.selected = true;
            break;
        }
    }
})();