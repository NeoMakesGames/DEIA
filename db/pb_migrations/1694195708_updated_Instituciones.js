/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6k9rr3wemi9jvt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bfe0jv0f",
    "name": "institutioName",
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
  const collection = dao.findCollectionByNameOrId("q6k9rr3wemi9jvt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bfe0jv0f",
    "name": "Nombre",
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
