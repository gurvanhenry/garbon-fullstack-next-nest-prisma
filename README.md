## run frontend

`cd frontend`
`yarn dev`

## run backend

`cd backend`
`yarn start:dev`

## Commands :

```sh
curl -d '{"content":"My message"}' -H "Content-Type: application/json" -X POST http://localhost:3000/message
```

```sh
curl http://localhost:3000/message
curl http://localhost:3000/message-from-db
```
