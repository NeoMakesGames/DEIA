/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tku69umguhbyd5w")

  collection.name = "medicos"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tku69umguhbyd5w")

  collection.name = "Medicos"

  return dao.saveCollection(collection)
})
