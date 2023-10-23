/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "q6k9rr3wemi9jvt",
    "created": "2023-09-05 14:43:11.983Z",
    "updated": "2023-09-05 14:43:11.983Z",
    "name": "Instituciones",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bfe0jv0f",
        "name": "Nombre",
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
        "id": "wgjm2w13",
        "name": "field",
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
  const collection = dao.findCollectionByNameOrId("q6k9rr3wemi9jvt");

  return dao.deleteCollection(collection);
})
