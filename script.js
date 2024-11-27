    const ul = document.getElementById('myList');
    const button = document.getElementById('addDynamicListItem');

    button.addEventListener('click', function() {

      const li = document.createElement('li');
      
      li.textContent = `Item ${ul.children.length + 1}`;
      
      ul.appendChild(li);
    });