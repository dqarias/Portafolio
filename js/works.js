projects = [
    {
        id : '0',
        image: 'images/Project1.png',
        title: 'Esla 1',
        autor: 'CANOPY',
        position: 'Back End Dev',
        year: 2015,
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        descriptionDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        language: ['html', 'css', 'javaScript'],
        live: 'https://dqarias.github.io/Portafolio/',
        source:'https://github.com/dqarias/Portafolio',
    },

    {
        id : '1',
        image: 'images/Project2.png',
        title: 'Esla 2',
        autor: 'CANOPY',
        position: 'Back End Dev',
        year: 2015,
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        descriptionDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        language: ['html', 'css', 'javaScript'],
    },

    {
        id : '2',
        image: 'images/Project3.png',
        title: 'Esla 3',
        autor: 'CANOPY',
        position: 'Back End Dev',
        year: 2015,
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        descriptionDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        language: ['html', 'css', 'javaScript'],
    },

    {
        id : '3',
        image: 'images/Project4.png',
        title: 'Esla 4',
        autor: 'CANOPY',
        position: 'Back End Dev',
        year: 2015,
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        descriptionDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        language: ['html', 'css', 'javaScript'],
    }
]

const work = document.querySelector('.works');

const renderCards = () => {
    projects.map((card)=>{
        let cardProject = document.createElement("div");
        cardProject.classList.add("card-project");
        cardProject.innerHTML= `
        <div class="card__image">
          <img
            class="card__img"
            src="${card.image}"
            alt="avocode page"
          />
        </div>
        <div class="card__body">
          <h2 class="card__title">${card.title}</h2>
          <ul class="card__information">
            <li class="card__information-name">${card.autor}</li>
            <li>
              <img src="./images/counter.svg" alt="information separator" />
            </li>
            <li class="card__information-position">${card.position}</li>
            <li>
              <img src="./images/counter.svg" alt="information separator" />
            </li>
            <li class="card__information-year">${card.year}</li>
          </ul>
          <p class="card__description">
          ${card.description}
          </p>
          <ul class="card__languages">
            <li>${card.language[0]}</li>
            <li>${card.language[1]}</li>
            <li>${card.language[2]}</li>
          </ul>
          <div class="btn-card">
            <button id="cardId${card.id}" class="open-modal btn btn-primary" type="button">See Project</button>
            </div>
        </div>
         `;
         work.appendChild(cardProject);
         
    })
     
}

renderCards();

const openModal = document.querySelectorAll('.open-modal');
console.log(openModal)

openModal.forEach((elementModal)=>{
    elementModal.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log("auchhclick")
        console.log(elementModal.id)
    
projects.filter((modalCard)=>{
        if (elementModal.id == `cardId${modalCard.id}`){
            console.log(modalCard.id)
            let modalProject = document.createElement("div");
            modalProject.classList.add("modal");
            modalProject.innerHTML =`
             <div class="modal-container">
             <div class="modal-header">
             <h2 class="modal__title">${modalCard.title}</h2>
            <p class="modal-close">X</p>
             </div>
        <ul class="modal__information">
          <li class="modal__information-name">${modalCard.autor}</li>
          <li>
            <img src="./images/counter.svg" alt="information separator" />
          </li>
          <li class="modal__information-position">${modalCard.position}</li>
          <li>
            <img src="./images/counter.svg" alt="information separator" />
          </li>
          <li class="modal__information-year">hh<${modalCard.year}
        </ul>
        <img class="modal__image" src="${modalCard.image}" alt="">
        <p class="modal__description">${modalCard.descriptionDetail}</p>
        <ul class="modal__languages">
         
        </ul>
        <ul class="modal__btns">
          <li><a class="btn btn-primary1" href="">See live <img src="./images/iconLive.svg" alt=""></a></li>
          <li><a class="btn btn-primary1" href="">See Source <img src="./images/iconModalGitHub.svg" alt=""></a></li>
        </ul>
        </div>`;  
        body.appendChild(modalProject);
        const closeModal = document.querySelectorAll('.modal-close');
       
        closeModal.forEach((closeM)=>{
            closeM.addEventListener('click',()=>{
                console.log("Click en cerrar");
                //body.removeChild(modalCard);
                modalProject.classList.remove("modal");
            })
        })
        
        
        }
    });
    
  
      
   
    
})
})



    
   




