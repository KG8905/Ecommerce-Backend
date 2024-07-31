const sequelize = require('../config/connection');
const { Category, Product, Tag, ProductTag } = require('../models');

const categoryData = require('./categoryData.json');
const productData = require('./productData.json');
const tagData = require('./tagData.json');
const productTagData = require('./productTagData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  await Tag.bulkCreate(tagData, {
    individualHooks: true,
    returning: true,
  });

  await ProductTag.bulkCreate(productTagData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
