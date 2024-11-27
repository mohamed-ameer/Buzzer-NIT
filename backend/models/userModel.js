import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import connectDB from '../config/db.js';

const sequelize = await connectDB();

class User extends Model {
  // Method to check if entered password matches the hashed password in the database
  static async matchPassword(enteredPassword, userPassword) {
    return await bcrypt.compare(enteredPassword, userPassword);
  }
}

// Initialize Sequelize model
User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Ensures email format is valid
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    hooks: {
      // Before save, hash password if modified
      beforeSave: async (user) => {
        if (user.password && user.changed('password')) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
    underscored: true, // Uses snake_case column names in the database
  }
);

export default User;
