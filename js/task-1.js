const categories = document.querySelector("ul#categories");
console.log(`Number of categories: ${categories.children.length}`);


const categoriesItems = categories.querySelectorAll("li.item");

categoriesItems.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('li').length;

    console.log(`Категорія: ${categoryTitle}`);
    console.log(`Кількість елементів: ${categoryItemsCount}`);
})

