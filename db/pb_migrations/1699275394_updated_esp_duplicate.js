/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2wxxxdqvbscge3")

  collection.name = "esp"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2wxxxdqvbscge3")

  collection.name = "esp_duplicate"

  return dao.saveCollection(collection)
})
