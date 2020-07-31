import Sequelize, { Model } from 'sequelize';

class User extends Model {
  /**
   * Represents a User.
   * @constructor
   * @param {string} sequelize - The connection of database.
  */
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password_hash: Sequelize.STRING,
      provider: Sequelize.BOOLEAN,
    },
    {
      sequelize,
    });
  }
}

export default User;
