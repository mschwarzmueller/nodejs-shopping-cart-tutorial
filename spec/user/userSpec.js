const dbURI = process.env.MONGO_DB_URI;
const should = require('chai').should();
const mongoose = require('mongoose');

var User = require('../../models/user');

describe('User Suite', () => {

  let user;
  beforeEach(() => {
    user = new User();
    user.password = 'senhaTeste';
  });

  it('should encrypt password', () => {
    expect(user.encryptPassword(user.password)).toContain('$2a$05');
  });

});

describe("Deve testar o Usuario no banco de dados: ", function() {

  beforeEach(function(done) {
    mongoose.Promise = global.Promise;
    if (mongoose.connection.db) return done();
    mongoose.connect(dbURI, done);
  });

  it("está removendo!", function(done) {
    User.find({
      email: 'brenosc2@hotmail.com'
    }).remove().exec();
    return done();
  });

  it("está salvando!", function(done) {
    const mockedUser = {
      name: 'Breno Henrique',
      city: 'Itaguara',
      state: 'Minas Gerais',
      email: 'brenosc2@hotmail.com',
      password: 'senhaTeste'
    }

    const newUser = new User(mockedUser);
    newUser.password = newUser.encryptPassword('senhaTeste');

    newUser.save(function(err, result) {
      if (err) {
        return done(err);
      }
      return done(null, newUser);
    });
  });

});