function create(words) {
   words.forEach(e => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = e;
      p.style.display = 'none';

      div.appendChild(p);
      div.addEventListener('click', onClick);

      document.getElementById('content').appendChild(div);

      function onClick(ev) {
         p.style.display = 'inline';
      }
   });
}
