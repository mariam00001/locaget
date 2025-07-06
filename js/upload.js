
  document.getElementById("nextBtn").addEventListener("click", function () {
    document.getElementById("promptLayer").classList.remove("d-none");
  });


  document.querySelector(".btn-ok").addEventListener("click", function () {
    document.getElementById("promptLayer").classList.add("d-none");
  });

document.querySelector(".btn-cancel2").addEventListener("click", closePrompt);