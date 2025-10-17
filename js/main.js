const loadAdoptBestFrd = async () => {
  const url = `https://openapi.programming-hero.com/api/peddy/categories`;
  const res = await fetch(url);
  const data = await res.json();
  displayAdoptBestFrd(data.categories);
};
const displayAdoptBestFrd = (datas) => {
  const btn_main = document.getElementById("btn-main");
  datas.forEach((data) => {
   console.log(data)
    const btn = document.createElement("button");
    btn.innerHTML = `
       <button onclick="loadByCategory('${data.category}')" class="btn w-[200px] text-6 font-bold py-6 px-8 flex flex-cols gap-8">
          <img class="w-8" src="${data.category_icon}"/>
       <p>${data.category} </p>
       </button>
      `;
    btn_main.appendChild(btn);
    console.log(btn);
  });
};
const loadAllPets = async () => {
          const url = `https://openapi.programming-hero.com/api/peddy/pets`;
          const res = await fetch(url);
         const data = await res.json();
         displayAllPets(data.pets)
};


const displayAllPets = (cards) => {

  const card_main = document.getElementById("card-main");
  if(cards.length === 0){
    card_main.classList.remove('grid')
    card_main.innerHTML = `
      <div class="flex flex-col gap-4">
         <img class="w-[150px] mx-auto" src='images/error.webp' alt=''>
         <p class="text-2xl font-bold mx-auto">No Information Available</P>
         <p class="text-base mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
      </div>
    
     `
    return
  }
  else{
      card_main.classList.add('grid')
  }
  card_main.innerHTML = ""
  cards.forEach((card) => {
    const div = document.createElement("div");
    div.innerHTML = `
              <div class="card bg-base-100 w-auto shadow-sm">
  <figure>
    <img
        src="${card.image}"
            onerror="this.onerror=null; this.src='images/pet.webp';"
            alt="${card.breed}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${card.pet_name}
    </h2>
    <p>Breed: ${card.breed}</p>
    <p>Date of birth: ${card.date_of_birth}</p>
     <p>Gender: ${card.gender}</p>
      <p>Price: ${card.price}</p>
    <div class="card-actions justify-start">
      <div class="btn"><img class="w-4" src="https://img.icons8.com/?size=50&id=24816&format=png" /></div>
      <div class="btn accent">Adopt</div>
      <div class="btn accent">Details</div>
    </div>
  </div>
</div>
    `
   card_main.appendChild(div)
  });
};
loadAllPets();
loadAdoptBestFrd();

const loadByCategory = async (event) =>{
    const url = `https://openapi.programming-hero.com/api/peddy/category/${event}`;
          const res = await fetch(url);
         const data = await res.json();
          displayAllPets(data.data)
}
// function getCategory(data){
//    data.forEach((d)=>{
//       console.log(d)
//    })
// }

