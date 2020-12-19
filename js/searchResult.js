console.log("Will come back if I have more time.");
// NOT ORIGINAL CODE
// source: https://esausilva.com/2017/02/21/filter-select-list-options-typeahead-in-javascript-es6/
// (function() {
//   const select = document.querySelectorAll('select');
//   const options = Array.from(select[0].options);
//   const input = document.querySelector('input');
//
//   function findMatches (search, options) {
//     return options.filter(option => {
//       const regex = new RegExp(search, 'gi');
//       return option.text.match(regex);
//     });
//   }
//
//   function filterOptions () {
//     options.forEach(option => {
//       option.remove();
//       option.selected = false;
//     });
//     const matchArray = findMatches(this.value, options);
//     select[0].append(...matchArray);
//   }
//
//   input.addEventListener('change', filterOptions);
//   input.addEventListener('keyup', filterOptions);
// })();
