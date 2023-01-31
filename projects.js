// hacky object: projects

const container = document.querySelector(".projects-container");

for( let i in projects){
  const card = document.createElement("div");
  card.classList.add("project-card");

  const div = document.createElement('div');
  div.classList.add("proj-div");
  div.innerHTML = projects[i].image;
  card.appendChild(div);
  
  // h4
  const h4 = document.createElement("h4");
  h4.classList.add("proj-client")
  h4.innerText = projects[i].client.toUpperCase();
  card.appendChild(h4);

  // image 
  // const img = document.createElement('img');
  // img.classList.add("proj-img");
  // img.src = projects[i].image;
  // card.appendChild(img);



  // description
  const p = document.createElement('p');
  p.classList.add("proj-description");
  p.innerText = projects[i].description;
  card.appendChild(p);

  container.appendChild(card);
}



