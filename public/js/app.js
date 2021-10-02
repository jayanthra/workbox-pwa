function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('people');

fetch('https://randomuser.me/api/?results=20')
  .then(response => response.json())
  .then(data => {
    let people = data.results;

    return people.map(function (person) {
      let li = createNode('li')
      let p = createNode('p')
      let img = createNode('img');

      p.innerHTML = `${person.name.first} ${person.name.last}`;
      img.src = person.picture.medium

      append(li, img);
      append(li, p);
      append(ul, li);

    });
  })