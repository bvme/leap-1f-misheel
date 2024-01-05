const cardElement = () => {
  `
  <div class="card" draggable="true" data-id=${id}>
    ${
      status === "done"
        ? `<div class="checked"><i class="fas fa-check"></i></div>`
        : `<div class="done" onclick="makeDone('${id}')"><i class="fas fa-check"></i></div>`
    }
    <div class="details">
      <h4>${title}</h4>
      <p>${description}</p>
      <div class="priority">
        ${priority}
      </div>
    </div>
    <div class="actions">
      <div class="done" onclick="remove('${id}')">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="done" onclick="">
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
    </div>
  </div>
`;
}
const addTodo = () => {
  const titleInputValue = document.getElementById("title-input").value;
  const descriptionInputValue =
    document.getElementById("description-input").value;
  const statusInputValue = document.getElementById("status").value;
  const priorityInputValue =
    document.getElementById("priority").value;
  const inputObj = {
    title: titleInputValue,
    Description: descriptionInputValue,
    Status: statusInputValue,
    Priority: priorityInputValue,
  };
}; 
document.querySelector(".cards").innerHTML = boxArray;
//backdrop active, remove
document.querySelectorAll("#add-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".backdrop").classList.add("active")
  })
});
document.querySelector(".away").addEventListener("click", () => {
  document.querySelector(".backdrop").classList.remove("active")
})