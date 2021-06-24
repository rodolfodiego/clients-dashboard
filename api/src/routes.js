const db = require("../clients.mock");
'use strict';


module.exports.load = (app) => {
  /** Get all clients */
  app.get("/", (req, res, next) => {
    const response = []

    for (var i = 0; i < db.length; i++) {
      response.push({
        id: db[i]._id,
        image: db[i].image_src,
        name: db[i].name,
        quantity_enterprise: db[i].enterprises.length,
        quantity_properties: 0
      });

      for (var j = 0; j < db[i].enterprises.length; j++) {
        response[i].quantity_properties += parseInt(db[i].enterprises[j].realties);   
      }
    }
    res.status(200).send({
      response : response
    });  
  })

  /** Get clients by name */
  app.get("/name/:name", (req, res, next) => {

    const response = [];
    const name = req.params.name;
    const nameUpper = name.toUpperCase()

    for (var i = 0; i < db.length; i++) {
      const nameBase = db[i].name;
      const nameBaseUpper = nameBase.toUpperCase()
      if (nameBaseUpper.includes(nameUpper )) {
        response.push({
          i:i,
          id: db[i]._id,
          name: db[i].name,
          image: db[i].image_src,
          quantity_enterprise: db[i].enterprises.length,
          quantity_properties: 0,   
        });    
      }
      
      if (response){
        for (var j = 0; j < response.length; j++) {
          for (var k = 0; k < response[j].quantity_enterprise; k++) {
            response[j].quantity_properties += parseInt(db[response[j].i].enterprises[k].realties);
          }
         
        } 
      }
      
    }

    res.status(200).send({
      response: response
    }) 

  });
  
  /** Get general totals */
  app.get("/totals", (req, res, next) => {

    var quantity_enterprise = 0;
    var quantity_properties = 0;

    var quantity_clients = db.length;
    for (var i = 0; i < db.length; i++) {
      quantity_enterprise = quantity_enterprise + db[i].enterprises.length;
      for (var j = 0; j < db[i].enterprises.length; j++) {
        quantity_properties +=  parseInt(db[i].enterprises[j].realties);
      }
    }

    res.status(200).send({
      quantity_clients: quantity_clients,
      quantity_enterprise: quantity_enterprise,
      quantity_properties: quantity_properties
    })
  });

  /** Get client totals */
  app.get("/:client_id/totals", (req, res, next) => {

    const idClient = req.params.client_id
    res.status(200).send({
      response: db
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
  /** Get a client by _id */
  app.get("/:_id", (req, res, next) => {
    const id = req.params._id
    res.status(200).send({
      mensagem: 'retornando o id ',
      id: id
    })
  });
}
