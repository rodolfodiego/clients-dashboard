module.exports.load = (app) => {
  /** Get all clients */
  app.get("/", (req, res, next) => {});  

  /** Get clients by name */
  app.get("/name/:name", (req, res, next) => {});
  
  /** Get client totals */
  app.get("/:client_id/totals", (req, res, next) => {});  

  /** Get all enterprises */
  app.get("/enterprise", (req, res, next) => {});

  /** Get enterprises by name */
  app.get("/enterprise/name/:name", (req, res, next) => {});

  /** Get all enterprises by client */
  app.get("/:client_id/enterprise", (req, res, next) => {});

  /** Get enterprises by client and name */
  app.get("/:client_id/enterprise/name/:name", (req, res, next) => {});

  /** Get general totals */
  app.get("/totals", (req, res, next) => {});

  /** Get a client by _id */
  app.get("/:_id", (req, res, next) => {});
};
