const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const h = document.getElementById("height");
  const w = document.getElementById("weight");
  const result = document.getElementById("results");

  const height = parseInt(h.value);
  const weight = parseInt(w.value);

  if (height === "" || height < 0 || isNaN(height)) {
    window.alert("Please give a valid height");
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    window.alert("Please give a valid height");
  } else {
    const r = weight / ((height * height) / 10000);
    console.log(r);
    result.innerHTML = `<div>${r}</div>`;
  }

  
});
