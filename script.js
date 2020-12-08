fetch("https://api.github.com/users/fjavier02/repos")
.then(info => {
    if (info.ok) {
        return info.json()
    } else {
        throw new Error("Não foi possivl obter a informação, Código " + resp.status)
    }
})
.then(data => {
    let inforepos = []
    data.forEach(repos => {
        inforepos.push({
            nome: repos.name,
            url: repos.html_url,
            owner: repos.owner.login,
            avatarOwner: repos.owner.avatar_url,
            fork: repos.fork
        })
    })
    createList(inforepos);
})

function createList(inforepos) {
    let section = document.querySelector("#projectos")
    let asfasf = 0;
    for ( let list of inforepos ) {
        let listRepos = document.createElement("div")
        if (list.fork === false) {
            list.fork = '';
        } else {
            list.fork = '<span class="badge badge-pill badge-dark">Fork</span>';
        }
        listRepos.innerHTML = `<div class="row listRepos alert alert-secondary">
        <a href="${list.url}" target="_blank">${list.nome}</a>
        <p class="fork">${list.fork}</p>
        </div>`;
        section.appendChild(listRepos);
        
        
    }  
};