const User = require('../../models/user');
let user;

describe('User Suite', () => {

  beforeEach(() => {
    user = new User();
    user.password = 'senhaTeste';
  });

  it('should encrypt password', () => {
    expect(user.encryptPassword(user.password)).toContain('$2a$05');
  });
  
});