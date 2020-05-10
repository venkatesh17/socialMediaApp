/* jshint indent: 2 */
/* 
CREATE TABLE `comments` (
  `userName` varchar(200) NOT NULL,
  `comments` varchar(2000) DEFAULT NULL,
  `like` int(11) DEFAULT NULL,
  `disLike` int(11) DEFAULT NULL,
  PRIMARY KEY (`userName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
SELECT * FROM tedrox.comments;
*/



module.exports = function(sequelize, DataTypes) {
    return sequelize.define('comments', {
      userName: {
        type: DataTypes.STRING(200),
        allowNull: false,
        primaryKey: true,
      },
      comments: {
        type: DataTypes.STRING(2000),
        allowNull: true
      },
      like: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      disLike: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      }
    }, {
      tableName: 'comments',
      timestamps: false
    });
  };
  