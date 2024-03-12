/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2wxxxdqvbscge3")

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2wxxxdqvbscge3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rai7wmzx",
    "name": "nacimiento",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "1900-01-01 00:00:00.000Z",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
