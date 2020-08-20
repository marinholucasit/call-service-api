import Sequelize, { Model } from 'sequelize';

class File extends Model {
  /**
   * Represents a File.
   * @constructor
   * @param {string} sequelize - The connection of database.
  */
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      path: Sequelize.STRING,
    },
    {
      sequelize,
    });

    return this;
  }
}

export default File;
