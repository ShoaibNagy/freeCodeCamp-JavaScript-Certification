const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const arrayContainer = document.getElementById("array-container");
const startingArrayContainer = document.getElementById("starting-array");

let currentArray = null;

function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  return [
    generateElement(),
    generateElement(),
    generateElement(),
    generateElement(),
    generateElement()
  ];
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(element, array) {
  element.innerHTML = "";
  array.forEach(number => {
    const spanEl = document.createElement("span");
    spanEl.textContent = number;
    element.appendChild(spanEl);
  });
}

function isOrdered(firstNumber, secondNumber) {
  return firstNumber <= secondNumber;
}

function swapElements(array, index) {
  if (!isOrdered(array[index], array[index + 1])) {
    const temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
  }
}

function highlightCurrentEls(element, index) {
  const children = element.children;
  if (children[index]) {
    children[index].style.border = "2px dashed red";
  }
  if (children[index + 1]) {
    children[index + 1].style.border = "2px dashed red";
  }
}

generateBtn.addEventListener("click", () => {
  currentArray = generateArray();

  Array.from(arrayContainer.children).forEach(child => {
    if (child.id !== "starting-array") child.remove();
  });

  sortBtn.classList.remove("hidden");
  fillArrContainer(startingArrayContainer, currentArray);
});

sortBtn.addEventListener("click", () => {
  if (!currentArray) return;

  Array.from(arrayContainer.children).forEach(child => {
    if (child.id !== "starting-array") child.remove();
  });

  const workArr = [...currentArray];
  const n = workArr.length;

  fillArrContainer(startingArrayContainer, workArr);
  highlightCurrentEls(startingArrayContainer, 0);

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (!isOrdered(workArr[i], workArr[i + 1])) {
        swapElements(workArr, i);
        swapped = true;
      }

      const div = generateContainer();
      fillArrContainer(div, workArr);
      arrayContainer.appendChild(div);
      highlightCurrentEls(arrayContainer.lastChild, i);
    }
  } while (swapped);

  arrayContainer.lastChild.remove();
  const sortedDiv = generateContainer();
  fillArrContainer(sortedDiv, workArr);
  sortedDiv.classList.add("sorted-row");
  arrayContainer.appendChild(sortedDiv);

  sortBtn.classList.add("hidden");
});