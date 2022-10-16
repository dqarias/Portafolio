const projects = [
  {
    id: '0',
    image: 'images/imageProject.png',
    imageProject: 'images/imageProject.png',
    title: 'Andean Cat',
    autor: 'Dino',
    position: 'Fronted Dev',
    year: 2022,
    description: 'This website was build to be used as an information page for preventing an endangered specie.',
    descriptionDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    language: ['html', 'css', 'javaScript'],
    live: 'https://dqarias.github.io/Capstone1-page/',
    source: 'https://github.com/dqarias/Capstone1-page',
  },

  {
    id: '1',
    image: 'images/Project2.png',
    imageProject: 'images/imageProject.png',
    title: 'Multi-Post Stories 2',
    autor: 'CANOPY',
    position: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: ['html', 'css', 'javaScript'],
  },

  {
    id: '2',
    image: 'images/Project3.png',
    imageProject: 'images/imageProject.png',
    title: 'Tonic 3',
    autor: 'CANOPY',
    position: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: ['html', 'css', 'javaScript'],
  },

  {
    id: '3',
    image: 'images/Project4.png',
    imageProject: 'images/imageProject.png',
    title: 'Multi-Post Stories 4',
    autor: 'CANOPY',
    position: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: ['html', 'css', 'javaScript'],
  },
];

const work = document.querySelector('.works');

const renderCards = () => {
  projects.forEach((card) => {
    const cardProject = document.createElement('div');
    cardProject.classList.add('card-project');
    cardProject.innerHTML = `
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
  });
};

renderCards();

const openModal = document.querySelectorAll('.open-modal');

openModal.forEach((elementModal) => {
  elementModal.addEventListener('click', (e) => {
    e.preventDefault();

    projects.forEach((modalCard) => {
      if (elementModal.id === `cardId${modalCard.id}`) {
        const modalProject = document.createElement('div');
        modalProject.classList.add('modal');
        modalProject.innerHTML = `
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
          <li class="modal__information-year">${modalCard.year}</li>
          <li>
        </ul>
        
        <img class="modal__image" src="${modalCard.imageProject}" alt="">
        <div class="modal-body">
        <p class="modal__description">${modalCard.descriptionDetail}</p>
        <div class="modal-aside">
        <ul class="modal__languages">
        <li>${modalCard.language[0]}</li>
        <li>${modalCard.language[1]}</li>
        <li>${modalCard.language[2]}</li>
        </ul>
        <ul class="modal__btns">
          <li><a class="btn btn-primary1" href="${modalCard.live}">See live <img src="./images/iconLive.svg" alt=""></a></li>
          <li><a class="btn btn-primary1" href="${modalCard.source}">See Source <img src="./images/iconModalGitHub.svg" alt=""></a></li>
        </ul>
        </div>
        </div>
        </div>`;
        work.appendChild(modalProject);
        const closeModal = document.querySelectorAll('.modal-close');

        closeModal.forEach((closeM) => {
          closeM.addEventListener('click', () => {
            modalProject.classList.remove('modal');
            work.removeChild(modalProject);
          });
        });
      }
    });
  });
});
