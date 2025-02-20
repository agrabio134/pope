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


