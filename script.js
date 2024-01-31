const searchbox=document.querySelector('.searchbox');
const searchbtn=document.querySelector('.search-btn');
const recipecontainer=document.querySelector('.recipe-container');

const fetchrecipes= async (query)=>{
    recipecontainer.innerHTML="Fetching recipes"
    const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

    const response= await data.json();
    recipecontainer.innerHTML="";
    response.meals.forEach(meal => {
        // normal for loop bhi lga skte h
        const recipediv=document.createElement('div');
        recipediv.classList.add('recipe');// meal islie lere h bcoz hmne foreach loop mei element ka naam meal lia h toh usse acccess krenge sbko

        recipediv.innerHTML=`
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}</p>
        <p>${meal.strCategory}</p>`

        recipecontainer.appendChild(recipediv);// container mei jo element create kia h usko append krdia


        
    });
    //console.log(response.meals[0]);// jo pehla meal tha vo access ho gya

}

searchbtn.addEventListener('click', (e)=>{
    e.preventDefault();//autosubmit ni hoega , page refresh ni hga button click krne p
const searchinput=searchbox.value.trim();
   fetchrecipes(searchinput);
});

