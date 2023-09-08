/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("66f9xxpvhitmn36");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "66f9xxpvhitmn36",
    "created": "2023-09-05 14:41:53.789Z",
    "updated": "2023-09-05 14:43:59.590Z",
    "name": "Administradores",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wsr35ufd",
        "name": "nombre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
})
