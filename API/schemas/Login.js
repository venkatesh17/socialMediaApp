/* jshint indent: 2 */

/*
CREATE TABLE `Login` (
  `username` varchar(200) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
*/
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Login', {
      username: {
        type: DataTypes.STRING(200),
        allowNull: false,
        primaryKey: true
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: true
      }
    }, {
      tableName: 'Login',
      timestamps: false
    });
  };
  