/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2wxxxdqvbscge3")

  collection.createRule = "@request.auth.id = id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2wxxxdqvbscge3")

  collection.createRule = null

  return dao.saveCollection(collection)
})
