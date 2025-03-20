import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface UserAttributes {
  id: number; // Use `number` for TypeScript, but Sequelize will handle it as BIGINT
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}

class User extends Model<UserAttributes> implements UserAttributes {
  declare id: number;
  declare email: string;
  declare password: string;
  declare role: 'USER' | 'ADMIN';
}

User.init(
  {
    id: {
      type: DataTypes.BIGINT, // Change to BIGINT
      primaryKey: true,
      autoIncrement: true, // Ensure the ID is auto-generated
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('USER', 'ADMIN'),
      defaultValue: 'USER',
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users', // Explicitly set the table name
    timestamps: true,
  }
);

export { User };
