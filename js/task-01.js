const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((category) => {console.log(`Category: ${category.querySelector('h2').textContent} Elements: ${category.querySelectorAll('li').length}`)
});


// for(const category of itemEl) {
//     console.log(`Category: ${category.querySelector('h2').textContent} Elements: ${category.querySelectorAll('li').length}`)
// }


// for (let i = 0; i < itemEl.length; i += 1) {
//     console.log (`Category: ${itemEl[i].querySelector('h2').textContent}  Elements: ${itemEl[i].querySelectorAll('li').length}`
//     )
// }