const loader = document.getElementsByClassName("loader");
const elementsToHide = [...loader];
const errorMsg = document.getElementById("errorMsg");
const dataCollected = document.getElementById("data");

async function findHacked() {
  errorMsg.innerText = "";
  dataCollected.innerHTML = "";

  const query = await getValue();
  if (!query) {
    errorMsg.innerText = "Please enter a valid email address.";
    return;
  }

  showSpinner();

  try {
    const response = await fetch(
      "https://api.proxynova.com/comb?query=" + query
    );
    const movies = await response.json();
    const emailData = movies.lines;

    hideSpinner();

    if (emailData.length === 0) {
      errorMsg.innerHTML = "No matches found.";
      return;
    }

    const listOfEmails = emailData.filter(
      (email) => email.split("@")[0] === query.split("@")[0]
    );

    if (listOfEmails.length === 0) {
      errorMsg.innerHTML = "No exact matches found.";
      return;
    }

    listOfEmails.forEach((email) => {
      const h3 = document.createElement("h3");
      h3.textContent = email;
      dataCollected.appendChild(h3);
    });
  } catch (error) {
    errorMsg.innerText =
      "Server is currently busy. Please try again later.";
    hideSpinner();
  }
}

function getValue() {
  const input = document.getElementById("textInput");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const resultAuth = regex.test(input.value);
  if (resultAuth) {
    return input.value;
  } else {
    return false;
  }
}

function showSpinner() {
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("uk-hidden");
}

function hideSpinner() {
  const spinner = document.getElementById("spinner");
  spinner.classList.add("uk-hidden");
}
