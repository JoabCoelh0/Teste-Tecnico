async function buscarUsuarios(){
    const usuarios = await fetch('https://randomuser.me/api/?results=20&nat=br')
    try {
        if(!usuarios.ok){
            throw new Error('Dados não carregados..')
        }   
        const dadosUsers = await usuarios.json()
        console.log(dadosUsers);
        
        return dadosUsers.results.map(user => { 
            return {
                name: user.name,
                email: user.email, 
                city: user.location .city
            }
        })

    } catch (error) {
        throw error;
    }
}


async function init(){
    try {
        const dados = await buscarUsuarios()
        console.log(dados);
    } catch (error) {
        console.log(error);
            
    }
}

init()