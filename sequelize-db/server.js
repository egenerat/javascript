const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database: ', err);
  });

const Post = sequelize.define('post', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT
})
  
sequelize.sync()
  .then(() => Post.create({
    title: 'Multiple',
    body: 'This object is saved many times in db'
  }))
  .then(jane => {
    console.log(jane.get({
      plain: true
    }));
  });
  
Post
  .findOrCreate({where: {
    title: 'Unique'
  }, defaults: {
    body: 'This one is saved only once'}
  })
  .spread((user, created) => {
    console.log(user.get({
      plain: true
    }))
    console.log("Was created: " + created)
  });