/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tku69umguhbyd5w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nl7avwks",
    "name": "mail",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hrcdumoe",
    "name": "Password",
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
  const collection = dao.findCollectionByNameOrId("tku69umguhbyd5w")

  // remove
  collection.schema.removeField("nl7avwks")

  // remove
  collection.schema.removeField("hrcdumoe")

  return dao.saveCollection(collection)
})
