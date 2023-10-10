/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "p73ka4tcpg8ncvn",
    "created": "2023-10-10 21:48:41.455Z",
    "updated": "2023-10-10 21:48:41.455Z",
    "name": "Medicos",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0ywvokty",
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
      },
      {
        "system": false,
        "id": "clhvtlja",
        "name": "avatar",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": null,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "hstapv2b",
        "name": "Instituciones",
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
      },
      {
        "system": false,
        "id": "miloxtkw",
        "name": "Espirometrias",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "88g41jj0woddpnz",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "id = @request.auth.id",
    "createRule": null,
    "updateRule": "id = @request.auth.id",
    "deleteRule": "id = @request.auth.id",
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("p73ka4tcpg8ncvn");

  return dao.deleteCollection(collection);
})
