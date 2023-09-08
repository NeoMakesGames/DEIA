/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tku69umguhbyd5w")

  // remove
  collection.schema.removeField("alttiaxo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvubuhdn",
    "name": "Insitucion",
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
  const collection = dao.findCollectionByNameOrId("tku69umguhbyd5w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "alttiaxo",
    "name": "Institucion",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("cvubuhdn")

  return dao.saveCollection(collection)
})
