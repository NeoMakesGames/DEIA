/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("18rwv2dimceonqa")

  collection.listRule = "@request.data.medico.id != @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("18rwv2dimceonqa")

  collection.listRule = "@request.data.medico.id = @request.auth.id"

  return dao.saveCollection(collection)
})
