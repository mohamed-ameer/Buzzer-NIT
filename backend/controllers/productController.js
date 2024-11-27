import { Op } from 'sequelize';
import asyncHandler from '../middleware/asyncHandler.js';
import { Product } from '../models/productModel.js';
import  User from '../models/userModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = Number(process.env.PAGINATION_LIMIT) || 10;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword || '';

  const whereCondition = keyword ? {
    name: {
      [Op.like]: `%${keyword}%`
    }
  } : {};

  const { count, rows: products } = await Product.findAndCountAll({
    where: whereCondition,
    limit: pageSize,
    offset: pageSize * (page - 1),
    include: [
      { model: User, as: 'user', attributes: ['id', 'name'] }
    ]
  });

  res.json({ 
    products, 
    page, 
    pages: Math.ceil(count / pageSize) 
  });
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findByPk(req.params.id, {
    include: [
      { model: User, as: 'user', attributes: ['id', 'name'] }
    ]
  });

  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error('Resource not found');
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create({
    name: 'Sample name',
    price: 0,
    userId: req.user.id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  res.status(201).json(product);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } = req.body;

  const [updated] = await Product.update(
    { 
      name, 
      price, 
      description, 
      image, 
      brand, 
      category, 
      countInStock 
    },
    { 
      where: { id: req.params.id } 
    }
  );

  if (updated) {
    const updatedProduct = await Product.findByPk(req.params.id);
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  if (product) {
    await product.destroy();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findByPk(req.params.id, {
    include: [{ model: db.Review, as: 'reviews' }]
  });

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.userId === req.user.id
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = await db.Review.create({
      name: req.user.name,
      rating: Number(rating),
      comment,
      userId: req.user.id,
      productId: product.id
    });

    // Recalculate product rating
    const reviews = await db.Review.findAll({ 
      where: { productId: product.id } 
    });

    const newRating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;
    
    await product.update({ 
      numReviews: reviews.length,
      rating: newRating
    });

    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.findAll({
    order: [['rating', 'DESC']],
    limit: 3
  });

  res.json(products);
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
};