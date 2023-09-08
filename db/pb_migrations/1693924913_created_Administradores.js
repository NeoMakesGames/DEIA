/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "66f9xxpvhitmn36",
    "created": "2023-09-05 14:41:53.789Z",
    "updated": "2023-09-05 14:41:53.789Z",
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
  const collection = dao.findCollectionByNameOrId("66f9xxpvhitmn36");

  return dao.deleteCollection(collection);
})
