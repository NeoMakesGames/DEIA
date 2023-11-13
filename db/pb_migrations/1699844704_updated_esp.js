/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2wxxxdqvbscge3")

  // remove
  collection.schema.removeField("qycjmfom")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lkhruild",
    "name": "Sexo",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "F",
        "M",
        "O"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jhzihl8j",
    "name": "FEV1_Value",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7d3svets",
    "name": "FEV1_Pred",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xvttxi4r",
    "name": "FVC_Value",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cu1in467",
    "name": "FVC_Pred",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2wxxxdqvbscge3")

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

  // remove
  collection.schema.removeField("lkhruild")

  // remove
  collection.schema.removeField("jhzihl8j")

  // remove
  collection.schema.removeField("7d3svets")

  // remove
  collection.schema.removeField("xvttxi4r")

  // remove
  collection.schema.removeField("cu1in467")

  return dao.saveCollection(collection)
})
