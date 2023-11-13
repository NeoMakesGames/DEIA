/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2wxxxdqvbscge3")

  // remove
  collection.schema.removeField("fq7hcdio")

  // remove
  collection.schema.removeField("b9o21dhs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rai7wmzx",
    "name": "nacimiento",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qycjmfom",
    "name": "Sexo",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kx0jonhm",
    "name": "datos_personales",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zndefdht",
    "name": "nombre_y_apellido",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2wxxxdqvbscge3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fq7hcdio",
    "name": "apellido_paciente",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b9o21dhs",
    "name": "data",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("rai7wmzx")

  // remove
  collection.schema.removeField("qycjmfom")

  // remove
  collection.schema.removeField("kx0jonhm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zndefdht",
    "name": "nombre_paciente",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
