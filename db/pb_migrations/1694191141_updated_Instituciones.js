/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6k9rr3wemi9jvt")

  // remove
  collection.schema.removeField("wgjm2w13")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "640skql7",
    "name": "field1",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q6k9rr3wemi9jvt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wgjm2w13",
    "name": "field",
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
  collection.schema.removeField("640skql7")

  return dao.saveCollection(collection)
})
