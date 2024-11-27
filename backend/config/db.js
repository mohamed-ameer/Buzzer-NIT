import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });
const connectDB = async () => {
    const sequelize = new Sequelize('buzzer', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
    });
    // const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    //     host: process.env.DB_HOST,
    //     dialect: 'mysql',
    // });

    try {
        await sequelize.authenticate();
        console.log('DB Connected successfully on .........');
    } catch (error) {
        console.error(`Failed to connect to DB.........${error}`);
    }

    return sequelize; // Return the Sequelize instance if needed elsewhere
};

export default connectDB;