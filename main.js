const LinksSocialMedia = {
  github: "rafaelaassuncao",
  youtube: "RafaJRA",
  facebook: "rafaela.assuncao1",
  instagram: "rafaelajra",
  twitter: "RafaAssuncao"
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class') // essa const só existe neste escopo (for) por isso ela muda.
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => { // agora todo o json está no "data"
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
    
  })
  //then() é uma promise
}
getGitHubProfileInfos()





/*  document.getElementById("userName")
  textContent ="Rafaela Assunção"
  = 
  userName.textContent = "Rafaela Assunção"*/

/* Padrão de criação de nomes 
camelCase 
PascalCase
snake_case */


