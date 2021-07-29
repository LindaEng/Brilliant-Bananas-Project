const { Warehouse } = require('./models/warehouse');
const { Aisle } = require('./models/aisle');
const { Item } = require('./models/Item');
const { Account } = require('./models/users/Account');
const { User } = require('./models/users/User');
const { sequelize } = require('./db');


//Create our Association!
async function initialiseDb() {
    Warehouse.hasMany(Aisle) //gives us Sequelize magic methods
    Aisle.belongsTo(Warehouse) //adds a foreign key on the aisle table, for the warehouse they belong to
    Aisle.hasMany(Item);
    Item.belongsTo(Aisle);

    Account.hasMany(User);
    User.belongsTo(Account);
    
    await sequelize.sync();
}

module.exports = initialiseDb ; // make sure we export our models with the associations added by function initialiseDb

