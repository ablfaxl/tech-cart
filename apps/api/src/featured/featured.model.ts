import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

// Featured Item Model
interface FeaturedAttributes {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  CategoryId: string;
}

class Featured extends Model<FeaturedAttributes> implements FeaturedAttributes {
  public name!: string;
  public href!: string;
  public imageSrc!: string;
  public imageAlt!: string;
  public CategoryId!: string;
}

Featured.init(
  {
    CategoryId: DataTypes.STRING,

    name: DataTypes.STRING,
    href: DataTypes.STRING,
    imageSrc: DataTypes.STRING,
    imageAlt: DataTypes.STRING,
  },
  { sequelize, modelName: 'Featured' }
);

export { Featured };
