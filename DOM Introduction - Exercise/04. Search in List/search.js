function search() {
   const towns = Array.from(document.querySelectorAll('li'));
   const inputValue = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   let counter = 0;

   for (let town of towns) {
      if (town.textContent.includes(inputValue)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   result.textContent = `${counter} matches found`;
}
