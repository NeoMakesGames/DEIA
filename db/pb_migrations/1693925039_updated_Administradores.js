/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("66f9xxpvhitmn36")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "drmusntn",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "q6k9rr3wemi9jvt",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("66f9xxpvhitmn36")

  // remove
  collection.schema.removeField("drmusntn")

  return dao.saveCollection(collection)
})
