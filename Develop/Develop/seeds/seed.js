const sequelize = require('./config/connection');
const { Category, Product, Tag, ProductTag } = require('./models');

const categoryData = require('./seeds/category-seeds.json');
const productData = require('./seeds/product-seeds.json');
const tagData = require('./seeds/tag-seeds.json');
const productTagData = require('./seeds/product-tag-seeds.json');

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
