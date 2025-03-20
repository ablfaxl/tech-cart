import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { authRoutes } from './auth/auth.route';
import { categoryRoutes } from './category/category.routes';
import { sequelize } from './config/database';
import morgan from 'morgan';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// sequelize.sync({ force: false }) // Set `force: true` to drop and recreate tables
//   .then(() => {
//     console.log('Database synchronized');
//   })
//   .catch((error) => {
//     console.error('Error synchronizing database:', error);
//   });


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected ✅');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });
