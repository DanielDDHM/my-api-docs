import e from 'express';
import swaggerUi from 'swagger-ui-express';

const swaggerMiddleware = (() => {
  function setup(app: e.Application) {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup());
  }
  return {
    setup,
  };
})();

export default swaggerMiddleware;
