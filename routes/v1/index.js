// import express-router
import routerx from 'express-promise-router';

// Import Routes
import categoryRoute from './category_route.js';

const router = routerx();

router.use('/api/v1/categories', categoryRoute);

export default router;
