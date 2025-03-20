import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

// Category Model
interface CategoryAttributes {
  id: string;
  name: string;
}

class Category extends Model<CategoryAttributes> implements CategoryAttributes {
  public id!: string;
  public name!: string;
}

Category.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  { sequelize, modelName: 'Category' }
);

export { Category };
