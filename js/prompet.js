document.getElementById("nextBtn").addEventListener("click", function () {
  document.getElementById("promptLayer").classList.remove("d-none");
});
document.getElementById("nextBtn2").addEventListener("click", function () {
  document.getElementById("promptLayer2").classList.remove("d-none");
});

function closePrompt() {
  document.getElementById("promptLayer").classList.add("d-none");
}
function closePrompt2() {
  document.getElementById("promptLayer2").classList.add("d-none");
}

document.querySelector(".btn-ok").addEventListener("click", closePrompt);
document.querySelector(".btn-cancel").addEventListener("click", closePrompt);
document.querySelector(".exit").addEventListener("click", closePrompt);

document.getElementById(".exitBtn2").addEventListener("click", closePrompt2);
document.getElementById(".cancelBtn").addEventListener("click", closePrompt2);;
