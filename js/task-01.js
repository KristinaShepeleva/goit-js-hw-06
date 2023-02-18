
const itemRef = document.querySelectorAll('.item');
const numberCategories = itemRef.length;

console.log(`Number of categories: ${numberCategories}`);


itemRef.forEach(function (element) {
  const titleRef = element.querySelector("h2");
  console.log(`Category: ${titleRef.textContent}`);
    
  const itemCategoryRef = element.querySelectorAll("li");
  console.log(`Elements: ${itemCategoryRef.length}`);
});



