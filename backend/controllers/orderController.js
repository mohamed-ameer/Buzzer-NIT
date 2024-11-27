import asyncHandler from '../middleware/asyncHandler.js';
import { Order, OrderItem } from '../models/orderModel.js';
import User from '../models/userModel.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    if (!orderItems || orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items');
    } else {
        // Start a transaction for data integrity
        const transaction = await Order.sequelize.transaction();

        try {
            // Create the order
            const order = await Order.create({
                userId: req.user.id,
                shippingAddress: JSON.stringify(shippingAddress),
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice,
            }, { transaction });

            // Create order items
            const orderItemsToCreate = orderItems.map((item) => ({
                orderId: order.id,
                name: item.name,
                qty: item.qty,
                image: item.image,
                price: item.price,
                productId: item.productId || item._id,
            }));

            await OrderItem.bulkCreate(orderItemsToCreate, { transaction });

            // Commit the transaction
            await transaction.commit();

            // Fetch the order with its items to return
            const createdOrder = await Order.findByPk(order.id, {
                include: [{ 
                    model: OrderItem, 
                    as: 'orderItems' 
                }]
            });

            res.status(201).json(createdOrder);
        } catch (error) {
            // Rollback the transaction if something goes wrong
            await transaction.rollback();
            throw error;
        }
    }
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findByPk(req.params.id, {
        include: [
            { 
                model: OrderItem, 
                as: 'orderItems' 
            },
            { 
                model: User, 
                attributes: ['name', 'email'] 
            }
        ]
    });

    if (order) {
        res.json(order);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findByPk(req.params.id);

    if (order) {
        order.isPaid = true;
        order.paidAt = new Date();
        order.paymentResult = JSON.stringify({
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address,
        });

        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    const order = await Order.findByPk(req.params.id);

    if (order) {
        order.isDelivered = true;
        order.deliveredAt = new Date();

        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.findAll({
        where: { userId: req.user.id },
        include: [{ 
            model: OrderItem, 
            as: 'orderItems' 
        }]
    });
    res.json(orders);
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.findAll({
        include: [{ 
            model: User, 
            attributes: ['id', 'name'] 
        }]
    });
    res.json(orders);
});

export {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getMyOrders,
    getOrders,
};