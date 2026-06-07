// Save Name
function saveName() {
    const name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    window.location.href = "gender.html";
}

// Save Gender
function saveGender() {
    const gender = document.getElementById("gender").value;
    localStorage.setItem("gender", gender);
    window.location.href = "weight.html";
}

// Save Weight
function saveWeight() {
    const weight = document.getElementById("weight").value;
    localStorage.setItem("weight", weight);
    window.location.href = "height.html";
}

// Save Height
function saveHeight() {
    const height = document.getElementById("height").value;
    localStorage.setItem("height", height);
    window.location.href = "sleep.html";
}

// Save Sleep Time
function saveSleep() {
    const sleep = document.getElementById("sleep").value;
    localStorage.setItem("sleep", sleep);
    window.location.href = "wakeup.html";
}

// Save Wakeup Time
function saveWakeup() {
    const wakeup = document.getElementById("wakeup").value;
    localStorage.setItem("wakeup", wakeup);
    window.location.href = "dashboard.html";
}

// Calculate BMI
function calculateBMI() {
    const weight = parseFloat(localStorage.getItem("weight"));
    const height = parseFloat(localStorage.getItem("height")) / 100;

    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(1);
        localStorage.setItem("bmi", bmi);
        return bmi;
    }

    return "N/A";
}

// Dashboard Data
window.onload = function () {

    if (document.getElementById("showName")) {
        document.getElementById("showName").innerText =
            localStorage.getItem("name") || "-";
    }

    if (document.getElementById("showGender")) {
        document.getElementById("showGender").innerText =
            localStorage.getItem("gender") || "-";
    }

    if (document.getElementById("showWeight")) {
        document.getElementById("showWeight").innerText =
            localStorage.getItem("weight") || "-";
    }

    if (document.getElementById("showHeight")) {
        document.getElementById("showHeight").innerText =
            localStorage.getItem("height") || "-";
    }

    if (document.getElementById("showSleep")) {
        document.getElementById("showSleep").innerText =
            localStorage.getItem("sleep") || "-";
    }

    if (document.getElementById("showWakeup")) {
        document.getElementById("showWakeup").innerText =
            localStorage.getItem("wakeup") || "-";
    }

    if (document.getElementById("showBMI")) {
        document.getElementById("showBMI").innerText =
            calculateBMI();
    }
};