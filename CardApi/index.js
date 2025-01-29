// How Does XHR Work?
// Create an XMLHttpRequest object.
// Open a request (specify method GET or POST and URL).
// Send the request.
// Handle the response when it arrives.

const button = document.querySelector(".get");
const imageContainer = document.querySelector(".image");
const profileImage = document.querySelector(".profile-image");
const nameElement = document.querySelector(".name");
const jobElements = document.querySelectorAll(".job");

button.addEventListener("click", () => {
  const requestURL = "https://api.github.com/users/hiteshchoudhary";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestURL, true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      // Update UI with fetched data
      profileImage.src = data.avatar_url;
      nameElement.textContent = data.name || "Unknown Name";
      jobElements[0].textContent = `Followers: ${data.followers}`;
      jobElements[1].textContent = `Following: ${data.following}`;
    } else {
      console.error("Request failed:", xhr.status);
    }
  };

  xhr.onerror = () => console.error("Network error occurred.");
  xhr.send();
});
