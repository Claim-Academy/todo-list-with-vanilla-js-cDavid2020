const root = document.querySelector("#root");

const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
const users = await resp.json();

function createBioCard(user) {
  return `
  <section class="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">

  // "bg-slate-900 black p-6 w-3/12 min-w-max rounded-md">
  <h2 class="text-2xl font-semibold my-2">${user.id}</h2>
  <ul class="flex gap-x-4 my-4">
    <li>Title: ${user.title}</li>
    <li>Completed: ${user.completed}</a></li>
  </ul>
</section>
  `;
}
const greyButton = (users) => {
  return users.filter((user) => user.completed === true);
};

// button needs on click. the event is the click

// template literals and string interoplation same thing

const bioCardsHTML = users.map(createBioCard).join("");

root.innerHTML = `
<div class="">
  <button id="button">Click Me</button>
${bioCardsHTML}
</div>
`;

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  const data = greyButton(users);
});
// button goes here on the inner html
