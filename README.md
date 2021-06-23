# API Spec
## Create Note

Request :
- Method : POST
- Endpoint : `/api/notes`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "title" : "string",
    "body" : "string",
    "tags" : "array"
}
```

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : {
         "id" : "string or uuid, unique",
         "title" : "string",
         "slug" : "string",
         "body" : "array",
         "tags" : "string",
         "createdAt" : "unix-timestamp",
         "updatedAt" : "unix-timestamp",
         "deletedAt" : "unix-timestamp",
     }
}
```

## Get Notes

Request :
- Method : GET
- Endpoint : `/api/notes/{note_id}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : {
         "id" : "string or uuid, unique",
         "title" : "string",
         "body" : "string",
         "tags" : "array",
         "createdAt" : "unix-timestamp",
         "updatedAt" : "unix-timestamp",
         "deletedAt" : "unix-timestamp",
     }
}
```

## Update Notes

Request :
- Method : PATCH
- Endpoint : `/api/notes/{id_note}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "title" : "string",
    "body" : "string"
    "tags" : "array",
}
```

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : {
         "id" : "string or uuid, unique",
         "title" : "string",
         "body" : "string",
         "tags" : "array",
         "createdAt" : "unix-timestamp",
         "updatedAt" : "unix-timestamp",
         "deletedAt" : "unix-timestamp"
     }
}
```

## List note

Request :
- Method : GET
- Endpoint : `/api/notes`
- Header :
    - Accept: application/json
- Query Param :
    - size : number,
    - page : number

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "data" : [
        {
             "id" : "string or uuid, unique",
             "title" : "string",
             "body" : "string",
             "tags" : "array",
             "createdAt" : "unix-timestamp",
             "updatedAt" : "unix-timestamp",
             "deletdAt" : "unix-timestmap"
        },
        {
             "id" : "string or uuid, unique",
             "title" : "string",
             "body" : "string",
             "tags" : "array",
             "createdAt" : "unix-timestamp",
             "updatedAt" : "unix-timestamp",
             "deletdAt" : "unix-timestmap"
         }
    ]
}
```

## Delete note

Request :
- Method : DELETE
- Endpoint : `/api/notes/{id_note}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "message" : "string"
}
```
## Restore note

Request :
- Method : DELETE
- Endpoint : `/api/notes/{id_note}/restore`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "message" : "string"
}
```
## Force Delete note

Request :
- Method : DELETE
- Endpoint : `/api/notes/{id_note}/forceDelete`
- Header :
    - Accept: application/json

Response :

```json 
{
    "code" : "number",
    "status" : "string",
    "message" : "string"
}
```
