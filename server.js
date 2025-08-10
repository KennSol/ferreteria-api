import express from 'express';
import productsRouter from './routes/products.route.js';
import categoriesRouter from './routes/categories.route.js';
import clientsRouter from './routes/clients.route.js';

const app = express();
app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/clients', clientsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});