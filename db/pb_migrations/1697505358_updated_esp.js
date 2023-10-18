/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0bzlwiorz58jvga")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e9fgu6rb",
    "name": "medico",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "18rwv2dimceonqa",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxbxvtnm",
    "name": "pName",
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
    "id": "mmzcans1",
    "name": "responseAI",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0bzlwiorz58jvga")

  // remove
  collection.schema.removeField("e9fgu6rb")

  // remove
  collection.schema.removeField("sxbxvtnm")

  // remove
  collection.schema.removeField("mmzcans1")

  return dao.saveCollection(collection)
})
