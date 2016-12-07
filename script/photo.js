// Select the modal element
var modal = document.getElementById('myModal');

// Select element within model element to change
var modalImg = document.getElementById("img01");

// Open the modal
function openModal(n) {
  var img = document.getElementById(n);
  modal.style.display = "block";
  modalImg.src = img.src;
}
// Close the modal
function closeModal() {
  modal.style.display = "none";
}
