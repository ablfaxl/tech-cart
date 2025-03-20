import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

// Section Model
interface SectionAttributes {
  name: string;
  CategoryId: string;
}

class Section extends Model<SectionAttributes> implements SectionAttributes {
  public name!: string;
  public CategoryId!: string;
  public id!: number;
}

Section.init(
  {
    name: DataTypes.STRING,
    CategoryId: DataTypes.STRING,
  },
  { sequelize, modelName: 'Section' }
);

// Section Item Model
interface SectionItemAttributes {
  name: string;
  href: string;
  SectionId: number;
}

class SectionItem
  extends Model<SectionItemAttributes>
  implements SectionItemAttributes
{
  public name!: string;
  public href!: string;
  public SectionId!: number;
}

SectionItem.init(
  {
    SectionId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    href: DataTypes.STRING,
  },
  { sequelize, modelName: 'SectionItem' }
);

export { Section, SectionItem };
