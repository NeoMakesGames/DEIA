/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("18rwv2dimceonqa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r7ad3amj",
    "name": "surName",
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
    "id": "rwopvhz4",
    "name": "institucion",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "4szxpkekszun71w",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("18rwv2dimceonqa")

  // remove
  collection.schema.removeField("r7ad3amj")

  // remove
  collection.schema.removeField("rwopvhz4")

  return dao.saveCollection(collection)
})
