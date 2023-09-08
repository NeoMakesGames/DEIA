/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tku69umguhbyd5w",
    "created": "2023-09-05 14:42:50.629Z",
    "updated": "2023-09-05 14:42:50.629Z",
    "name": "Medicos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kkxkvsfi",
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
        "id": "alttiaxo",
        "name": "Institucion",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tku69umguhbyd5w");

  return dao.deleteCollection(collection);
})
