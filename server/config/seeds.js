const db = require('./connection');
const { User } = require('../Models');

db.once('open', async () => {
    await User.deleteMany();

    await User.create({
      firstName: 'Pamela',
      lastName: 'Washington',
      email: 'pamela@testmail.com',
      displayName: '69dickslap420',
      password: 'password12345',
      role: 'ADMIN'
    });
  
    await User.create({
      firstName: 'Elijah',
      lastName: 'Holt',
      email: 'eholt@testmail.com',
      displayName: 'coffeemug25',
      password: 'password12345',
      role: 'USER'
    });
  
    console.log('users seeded');
  
    process.exit();
})