import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

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
      password: Sequelize.VIRTUAL, // VIRTUAL is a field that never will be creating in the DataBase
      password_hash: Sequelize.STRING,
      provider: Sequelize.BOOLEAN,
    },
    {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associations(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id' });
  }

  verifyPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
