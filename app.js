const dateDay = document.querySelector(".date-day");
const dateMonth = document.querySelector(".date-month");
const dateYear = document.querySelector(".date-year");
const dateDayName = document.querySelector(".date-day-name");
const addTaskButton = document.querySelector(".add-button");
const deleteButton = document.querySelector(".delete-button");
const taskTitleInput = document.querySelector(".task-title-input");
const taskContainer = document.querySelector(".task-container");

const setDate = () => {
  const currentDate = new Date();
  dateDay.textContent = currentDate.toLocaleDateString("es", {
    day: "numeric",
  });
  dateMonth.textContent = currentDate.toLocaleDateString("es", {
    month: "long",
  });
  dateYear.textContent = currentDate.toLocaleDateString("es", {
    year: "numeric",
  });
  dateDayName.textContent = currentDate.toLocaleDateString("es", {
    weekday: "long",
  });
};

const chageTaskState = (e) => {
  e.target.classList.toggle("done");
};

const clearCompletedTasks = () => {
  const activeTask = [];
  taskContainer.childNodes.forEach((element) => {
    if (!element.classList.contains("done")) activeTask.push(element);
  });
  taskContainer.innerHTML = "";
  return [...activeTask];
};

const createTask = () => {
  const task = document.createElement("div");
  task.textContent = taskTitleInput.value;
  task.classList.add("task");
  task.addEventListener("click", chageTaskState);
  taskContainer.append(task);
};

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  createTask();
  taskTitleInput.value = "";
});

deleteButton.addEventListener("click", () => {
  clearCompletedTasks().forEach((element) => {
    taskContainer.appendChild(element);
  });
});

setDate();
