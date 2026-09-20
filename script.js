const taskForm = document.getElementById("taskForm");

const openModalButton =
    document.getElementById("openModal");

const closeModalButton =
    document.getElementById("closeModal");

const studyModal =
    document.getElementById("studyModal");


taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Study task added successfully!");

    taskForm.reset();

});


openModalButton.addEventListener("click", function () {

    studyModal.showModal();

});


closeModalButton.addEventListener("click", function () {

    studyModal.close();

});