

module.exports.load = (app) => {
  /** Get all clients */
  app.get("/", (req, res, next) => {
    res.status(200).send({
      mensagem: 'usando get no /'
    })
  });  

  /** Get clients by name */
  app.get("/name/:name", (req, res, next) => {
    const name = req.params.name
    res.status(200).send({
      mensagem: 'retornando o nome',
      name: name
    })

  });
  
  /** Get client totals */
  app.get("/:client_id/totals", (req, res, next) => {

    const idClient = req.params.client_id
    res.status(200).send({
      mensagem: 'retornando o id do cliente',
      name: idClient
    })
  });  

  /** Get all enterprises */
  app.get("/enterprise", (req, res, next) => {
    res.status(200).send({
      mensagem: 'enterpreise',
    })
  });

  /** Get enterprises by name */
  app.get("/enterprise/name/:name", (req, res, next) => {

    const name = req.params.name
    res.status(200).send({
      mensagem: 'retornando o nome',
      name: name
    })
  });

  /** Get all enterprises by client */
  app.get("/:client_id/enterprise", (req, res, next) => {
    const idClient = req.params.client_id
    res.status(200).send({
      mensagem: 'retornando o id enterpreise',
      id: idClient
    })
  });

  /** Get enterprises by client and name */
  app.get("/:client_id/enterprise/name/:name", (req, res, next) => {
    const idClient = req.params.client_id
    const name = req.params.name
    res.status(200).send({
      mensagem: 'retornando o id enterpreise e nome',
      id: idClient,
      name: name
    })
  });

  /** Get general totals */
  app.get("/totals", (req, res, next) => {
    res.status(200).send({
      mensagem: 'retornando total'
    })
  });

  /** Get a client by _id */
  app.get("/:_id", (req, res, next) => {
    const id = req.params._id
    res.status(200).send({
      mensagem: 'retornando o id ',
      id: id
    })
  });
};
