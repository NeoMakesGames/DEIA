/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0bzlwiorz58jvga",
    "created": "2023-10-12 20:15:50.738Z",
    "updated": "2023-10-12 20:15:50.738Z",
    "name": "esp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "f8xlhtdv",
        "name": "date",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "myfe3naa",
        "name": "data",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("0bzlwiorz58jvga");

  return dao.deleteCollection(collection);
})
