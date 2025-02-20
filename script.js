function copyToClipboard() {
    const contractText = document.getElementById("contract").textContent;
    navigator.clipboard.writeText(contractText).then(() => {
        const button = document.querySelector(".copy-btn");
        button.textContent = "Copied!";
        setTimeout(() => {
            button.textContent = "Copy Address";
        }, 2000);
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
}



function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
        button.innerHTML = "🌞 Light Mode";
    } else {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        button.innerHTML = "🌙 Dark Mode";
    }
}
// Apply saved theme on page load
window.onload = function () {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('.theme-toggle').innerHTML = "🌙 Dark Mode";
    }
};

