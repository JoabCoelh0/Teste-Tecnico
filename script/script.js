async function buscarUsuarios() {
    try{
        const response = await fetch('https://randomuser.me/api/?results=20')

        if(!response.ok){
            throw new Error('Dados não carreegados...')
        }
        const dados = await response.json()
        console.log(dados);        
        return dados.results.map(user =>{
            return{
                nome: user.name.first,
                email: user.email,
                foto: user.picture.medium
            }
        })
    
    } catch(error){
        console.log(`Erro ao buscar usuários: ${error.message}`)
    }
}



async function initCards(){
    try {
        const carregando = document.querySelector('.loading')
        carregando.style.display = 'none'

        const dados = await buscarUsuarios()
        //Container que vai conter os cards
        const container = document.querySelector('.cards')

        for(let usuarios of dados){
            //criando user card
            const userCard = document.createElement('div')
            userCard.classList.add('user-card')
            //Colocando o card dentro do  container
            container.appendChild(userCard)
            


            //constainer de imagem 
            const containerImg = document.createElement('div')
            containerImg.classList.add('container-imagem')
            containerImg.innerHTML = `<img src="${usuarios.foto}" alt="">`
            container.appendChild(containerImg) 

            //Container dados 
            const constainerDados = document.createElement('div')
            constainerDados.classList.add('dados-usuario')


            // Criando H1 - Nome do User
            const nomeUser = document.createElement('h1')
            nomeUser.classList.add('nome')
            nomeUser.textContent = `${usuarios.nome}`
            constainerDados.appendChild(nomeUser)

            // Crando span para email
            const span = document.createElement('span')
            span.classList.add('email')
            span.textContent = `${usuarios.email}`
            constainerDados.appendChild(span)

            //Adicionando usuários no card
            userCard.appendChild(containerImg)
            userCard.appendChild(constainerDados)            
        }
         


    } catch (error) {
        console.log(`Erro ao carregar usuários: ${error.message}`);
        
    }
}
initCards() 