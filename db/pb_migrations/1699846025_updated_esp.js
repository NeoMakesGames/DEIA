/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2wxxxdqvbscge3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lkhruild",
    "name": "sexo",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2wxxxdqvbscge3")

  // update
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

  return dao.saveCollection(collection)
})
