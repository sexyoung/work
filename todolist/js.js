(function(){

  const event = {
    renderList: function(item) {
      let li = document.createElement("li");
      let button = document.createElement("button");

      button.className = "remove";
      button.appendChild(document.createTextNode('x'));
      button.addEventListener('click', this.remove.bind(null, item.id));

      li.id = item.id;
      li.appendChild(document.createTextNode(item.value));
      li.appendChild(button);

      document.getElementById('list').appendChild(li);
    },
    remove: function(id) {
      document.getElementById(id).remove();
    }
  }

  // create
  document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const { value } = document.getElementById('text');
    if(!value) return;
    const id = `text-${Math.random()}`;
    event.renderList({id, value});

    document.getElementById('text').value = "";
  });
})();
