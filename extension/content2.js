// content2.js

function anotherFunction(url) {
    console.log(`The URL is: ${url}`);

    // Show domain
    document.getElementById('dmurl').textContent = "Domain: " + url.split('/')[2];

    // Fetch IP address
    fetch(`http://ip-api.com/json/${url.split('/')[2]}`)
        .then(resp => resp.json())
        .then(data1 => {
            document.getElementById('myip').textContent = "IPv4: " + data1.query;
        })
        .catch(error => console.log('IP Error:', error));

    // Call backend API (Render)
    fetch(`https://phishing-detector-nhel.onrender.com/api/${url}`, {
        method: 'GET',
    })
    .then(response => response.json())   // ✅ FIXED
    .then(data => {
        console.log("API Response:", data);

        const res = data.result;   // ✅ Extract result string

        // Show result
        document.getElementById('result').textContent = res;

        if (res !== "") {
            // Hide loader
            setTimeout(() => {
                document.getElementById("myimg").style.display = "none";
            }, 300);

            if (res === "Website is Phising") {
                document.getElementById('result1').textContent = res;
                document.getElementById("alert").style.display = "block";
                document.getElementById("safe").style.display = "none";
            } else {
                document.getElementById('result2').textContent = res;
                document.getElementById("safe").style.display = "block";
                document.getElementById("alert").style.display = "none";
            }
        }
    })
    .catch(error => {
        console.log('API Error:', error);
        document.getElementById("myimg").style.display = "none";
        document.getElementById('result').textContent = "Error fetching result";
    });
}


// Get active tab URL
function runScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        const url = tabs[0].url;
        anotherFunction(url);
    });
}


// Button click handler
const Button = document.getElementById('popup-button');
const myimg = document.getElementById("myimg");

Button.addEventListener("click", () => {
    console.log("Scan started...");
    myimg.style.display = "block";

    // Reset UI before scan
    document.getElementById('result').textContent = "";
    document.getElementById('result1').textContent = "";
    document.getElementById('result2').textContent = "";
    document.getElementById("alert").style.display = "none";
    document.getElementById("safe").style.display = "none";

    runScript();
});