import { Request, Response } from 'express';
import { Featured } from '../featured/featured.model';
import { Section, SectionItem } from '../section/section.model';
import { Category } from './category.model';

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Featured,
          attributes: ['name', 'href', 'imageSrc', 'imageAlt'],
        },
        {
          model: Section,
          include: [SectionItem],
        },
      ],
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const category = await Category.create(categoryData, {
      include: [Featured, { model: Section, include: [SectionItem] }],
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: 'Category creation failed' });
  }
};
