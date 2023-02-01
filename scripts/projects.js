const container = document.querySelector(".projects-container");

for( let i in projects){
  const card = document.createElement("div");
  card.classList.add("project-card");

  const div = document.createElement('div');
  div.classList.add("proj-div");
  div.innerHTML = projects[i].logo;
  card.appendChild(div);
  
  // h4
  const h4 = document.createElement("h4");
  h4.classList.add("proj-client")
  h4.innerText = projects[i].client.toUpperCase();
  card.appendChild(h4);

  const overlay = document.createElement('img');
  overlay.classList.add("project-gif");
  overlay.src = projects[i].gif
  card.appendChild(overlay)



  container.appendChild(card);
}

