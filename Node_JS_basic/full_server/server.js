import express from 'express';
import mapRoutes from './routes/index';

const app = express();
const PORT = 1245;

// Map routes
mapRoutes(app);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
