// document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newh1 = document.createElement("h1");

  // and give it some content
  const newContent = document.createTextNode(
    "Hi there my name is Kolade matanmi an a frontend engineer!"
  );

  // add the text node to the newly created div
  newh1.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentH1 = document.getElementById("h1");
  document.body.insertBefore(newh1, currentH1);
}
