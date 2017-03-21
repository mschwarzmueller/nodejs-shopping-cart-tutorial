var dbURI = 'mongodb://localhost:27017/shopping',
  should = require('chai').should(),
  mongoose = require('mongoose'),
  User = require('../../models/user');

const mockedUser = {
  name: 'Breno Henrique',
  city: 'Itaguara',
  state: 'Minas Gerais',
  email: 'brenosc2@hotmail.com',
  password: 'senhaTeste'
}

newUser = new User(mockedUser);
newUser.password = newUser.encryptPassword('senhaTeste');

describe("Deve testar o Usuario no banco de dados: ", function() {

  beforeEach(function(done) {
    if (mongoose.connection.db) return done();
    mongoose.connect(dbURI, done);
  });

  it("está salvando!", function(done) {

    User.find({
      email: 'brenosc2@hotmail.com'
    }).remove().exec();

    newUser.save(
      function(err, result) {
        if (err) {
          return done(err);
        }
        return done(null, newUser);
      }
    );
  });

});