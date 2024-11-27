const dotenv = require('dotenv');
const colors = require('colors');
const { Sequelize } = require('sequelize');

// Import models (adjust path as needed)
const { User } = require('./models/userModel');
const { Product } = require('./models/productModel');
const { Order, OrderItem } = require('./models/orderModel');

// Import seed data (adjust path as needed)
const users = require('./data/users');
const products = require('./data/products');

// Load environment variables
dotenv.config();

// Create Sequelize instance
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mysql',
  logging: false
});

// Import function
const importData = async () => {
  try {
    // Start a transaction for data integrity
    const transaction = await sequelize.transaction();

    try {
      // Delete existing data (in reverse order of dependencies)
      await OrderItem.destroy({ where: {}, transaction });
      await Order.destroy({ where: {}, transaction });
      await Product.destroy({ where: {}, transaction });
      await User.destroy({ where: {}, transaction });

      // Create users
      const createdUsers = await User.bulkCreate(users, { transaction });
      const adminUser = createdUsers[0].id;

      // Create products with admin user reference
      const sampleProducts = products.map((product) => ({
        ...product,
        userId: adminUser
      }));
      await Product.bulkCreate(sampleProducts, { transaction });

      // Commit the transaction
      await transaction.commit();

      console.log('Data Imported!'.green.inverse);
      process.exit();
    } catch (error) {
      // Rollback the transaction if anything goes wrong
      await transaction.rollback();
      throw error;
    }
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Destroy function
const destroyData = async () => {
  try {
    // Start a transaction
    const transaction = await sequelize.transaction();

    try {
      // Delete data in reverse order of dependencies
      await OrderItem.destroy({ where: {}, transaction });
      await Order.destroy({ where: {}, transaction });
      await Product.destroy({ where: {}, transaction });
      await User.destroy({ where: {}, transaction });

      // Commit the transaction
      await transaction.commit();

      console.log('Data Destroyed!'.red.inverse);
      process.exit();
    } catch (error) {
      // Rollback the transaction if anything goes wrong
      await transaction.rollback();
      throw error;
    }
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// CLI argument handling
const runSeeder = async () => {
  // Sync all models before running seeder
  await sequelize.sync({ force: false });

  if (process.argv[2] === '-d') {
    await destroyData();
  } else {
    await importData();
  }
};

runSeeder();

module.exports = { importData, destroyData };