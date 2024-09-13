(async ()=> {
const db = require('./models')


// me conecto a la base de datos
await db.sequelize.authenticate()

// Ojo: Esta linea es para desarrollo que sincroniza los modelos con la base
// es decir que crea la tabla en la base de dato y si existe la borra y la vuelve a crear
await db.sequelize.sync( {force:true})


//Creo un usuario en la base de datos
const user = await db.User.create(
    {
        firstName: 'Gerardo',
        lastName: 'Gonzalez',
        email: 'gerardo.gonzalez@gmail.com'
    }
)
console.log(`Usuario Craado: ${JSON.stringify(user, null, 2)}`)

// Usuario Modificado con save
user.firstName = 'Gerardo Martin'
await user.save()
console.log(`Usuario Modificado con save: ${JSON.stringify(user, null, 2)}`)


//Creo otro usuario en la base de datos
const user2 = await db.User.create(
    {
        firstName: 'Florencia',
        lastName: 'Medel',
        email: 'flomedel.com'
    }
)

// Usuario Modificado dimple update
const user2Update = await db.User.update( 
    { email: 'flomedel@gmail.com'},
    {
        where : {
            firstName: 'Florencia'
        }
    }
)

console.log(`Usuario Modificado con save: ${JSON.stringify(user2Update, null, 2)}`)


//Recupero todos los datos en la base de datos
const users = await db.User.findAll({})
console.log(`Recupero  Todos los usuarios: ${JSON.stringify(users, null, 2)}`)


//Recupero filtrando por la primary key
const user3 = await db.User.findByPk(2)
console.log(`Recupero filtrando por la primary key: ${JSON.stringify(user3, null, 2)}`)


//Recupero filtrando por atributos
const usersFiltro = await db.User.findAll({where: {email: 'flomedel@gmail.com'}})
console.log(`Recupero filtrando por atributos: ${JSON.stringify(usersFiltro, null, 2)}`)


//DELETE queries
await db.User.destroy({where: {email: 'flomedel@gmail.com'}})
console.log(`Recupero filtrando por atributos: ${JSON.stringify(usersFiltro, null, 2)}`)

//Recupero filtrando por atributos
const usersEmpty = await db.User.findAll({where: {email: 'flomedel@gmail.com'}})
console.log(`Recupero filtrando por atributos: ${JSON.stringify(usersEmpty, null, 2)}`)

})();