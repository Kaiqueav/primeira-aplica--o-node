const fs = require ('fs');
const { join } = require('path');

const filePath = join(__dirname,  'users.json');

const getUser = () =>{
    const getUsers = () => {
        const data = fs.existsSync(filePath)
            ? fs.readFileSync(filePath)
            : []
    
        try {
            return JSON.parse(data);
        } catch (e) {
            return [];      
        }
    };
}

// salvar usuario

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '/t'));

// criando metodos de busca
const userRoutes = (app) => {
    app.Route('/users/:id?')
    .get((req,  res) => {
        const users = getUsers()
        res.send({users})
  });
}

 module.exports = userRoutes