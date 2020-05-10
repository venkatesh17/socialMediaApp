/* jshint indent: 2 */
/* CREATE TABLE `Profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `phoneNumber` varchar(45) NOT NULL,
  `mailId` varchar(45) NOT NULL,
  `img` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
*/

module.exports  = function(sequelize, DataTypes){
     return sequelize.define('Profile',  {
          id: {
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true,
               autoIncrement: true
          },
          firstName: {
               type: DataTypes.STRING(45),
               allowNull: false
          },
          lastName: {
               type: DataTypes.STRING(45),
               allowNull: false
          },
          address: {
               type: DataTypes.STRING(45),
               allowNull: false
          },
          username: {
               type: DataTypes.STRING(45),
               allowNull: false
          },
          password: {
               type: DataTypes.STRING(45),
               allowNull: false
          },
          phoneNumber: {
               type: DataTypes.STRING(45),
               allowNull: false
          },
          mailId: {
               type: DataTypes.STRING(45),
               allowNull: false
          },
          img: {
               type: DataTypes.STRING(200),
               allowNull: false
          },
     },
     {
         tableName: 'Profile',
         timestamps: false
    })
}
