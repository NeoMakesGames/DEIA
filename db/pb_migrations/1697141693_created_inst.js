/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4szxpkekszun71w",
    "created": "2023-10-12 20:14:53.349Z",
    "updated": "2023-10-12 20:14:53.349Z",
    "name": "inst",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lhyxx93q",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4szxpkekszun71w");

  return dao.deleteCollection(collection);
})
