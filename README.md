# EnaFood

# Cadastro de usuário

## POST /api/users/register - Rota responsável pelo CADASTRO do usuário.

#### Não necessita de AUTORIZAÇÃO por token

##### Obs: por padrão isOwner é setado como false

#### Corpo da requisição:

```json
{
  "name": "heitor",
  "email": "heitor@gmail.com",
  "password": "123456",
  "isOwner": true
}
```

#### Corpo da resposta - STATUS CODE 201 - CREATED:

```json
{
  "_id": "62b0d6261dd2b3529865c641",
  "name": "heitor",
  "email": "orelha22@gmail.com",
  "isOwner": true
}
```

## POST /api/users/login - Rota responsável pelo LOGIN do usuário.

#### Não necessita de AUTORIZAÇÃO por token -

#### Corpo da requisição:

```json
{
  "email": "heitor@gmail.com",
  "password": "123456"
}
```

#### Corpo da resposta - STATUS CODE 200 - OK:

```json
{
  "token": "370e63d575bfsdfsfesasdfa2346c1bfb973b0b61047dae3"
}
```

### Possíveis erros

### OBS: Caso o nome de uma das chaves esteja incorreta ou então não seja passada.

FORMATO DA RESPOSTA - STATUS 400 - Bad Request

#### Corpo da requisição:

```json
{
  "name": "heitor",
  "password": "123456"
}
```

#### Corpo da resposta - STATUS CODE 400 - Bad Request:

```json
{
  "message": ["email is a required field"]
}
```

---

## ADCIONANDO UM ENDEREÇO A UM USUÁRIO

### POST /api/address/register

#### Necessita de AUTORIZAÇÃO por token -

#### Corpo da requisição:

```json
{
  "street": "Rua das borboletas",
  "houseNumber": 8,
  "city": "Rio de janeiro"
}
```

#### Corpo da resposta - STATUS CODE 201 - CREATED:

```json
{
  "address": {
    "user": {
      "isOwner": false,
      "email": "heitor@gmail.com",
      "name": "heitor",
      "_id": "62b0d6261dd2b3529865c641"
    },
    "city": "Rio de janeiro",
    "houseNumber": 8,
    "street": "Rua das borboletas",
    "_id": "62b24a7a9c689f2e700e3711"
  }
}
```

### Possíveis erros

### Caso a requisição seja feita sem o token do usuário

#### Corpo da resposta - STATUS CODE 401 - Unauthorized:

```json
{
  "message": "Missing authorization headers"
}
```

---

# CADASTRANDO UM RESTAURANTE

## POST /api/restaurant/register - Rota responsável pelo CADASTRO do restaurante.

#### Necessita de AUTORIZAÇÃO por token

#### Corpo da requisição:

```json
{
  "name": "enafood"
}
```

#### Corpo da resposta - STATUS CODE 201 - CREATED:

```json
{
  "restaurant": {
    "user": {
      "_id": "62b0d6261dd2b3529865c641"
    },
    "name": "enafood",
    "_id": "62b0d7238088a485124af623"
  }
}
```

## GET /api/restaurant - Rota responsável pela listagem de todos os restaurante.

#### Não necessita de AUTORIZAÇÃO por token

#### Requisição sem corpo

#### Corpo da resposta - STATUS CODE 200 - OK:

```json
{
  "restaurants": [
    {
      "user": {
        "_id": "62aff86fd54199a2ae74aab3"
      },
      "name": "enafood",
      "_id": "62b07d0289034099e8994b05"
    },
    {
      "user": {
        "_id": "62aff86fd54199a2ae74aab3"
      },
      "name": "comerBem",
      "_id": "62b07d1a0227bc16b02d3ba4"
    },
    {
      "user": {
        "_id": "75b021acc6dad20092104021"
      },
      "name": "enafood2.0",
      "_id": "62b0823e5dadd2783c30835d"
    }
  ]
}
```

### Possíveis erros

### Caso a requisição seja feita sem o token do usuário que seja USUÁRIO OWNER

#### Corpo da resposta - STATUS CODE 401 - Unauthorized:

```json
{
  "message": "Permission denied"
}
```

:

## ADCIONAR PRODUTO AO RESTAURANT

### POST /api/products/register/:id

### OBS: PASSAR ID DO RESTAURANTE QUE IRA RECEBER O PRODUTO

#### Corpo da requisição:

```json
{
  "products": [
    {
      "name": "pizza",
      "price": 60.0,
      "available": true,
      "quantityInStock": 2
    }
  ]
}
```

#### Corpo da resposta - STATUS CODE 201 - CREATED:

```json
{
  "products": [
    {
      "restaurant": {
        "_id": "62b07fb4a0832085e391a0a2"
      },
      "available": true,
      "quantityInStock": 2,
      "price": 60,
      "name": "pizza",
      "_id": "62b25906d42ae592c59a8620"
    }
  ]
}
```

### Possíveis erros

### Caso a requisição seja feita sem o token de um USUÀRIO

#### Corpo da resposta - STATUS CODE 401 - Unauthorized:

```json
{
  "message": "Missing authorization headers"
}
```

## GET /api/products/:id - Rota responsável pela listagem de todos os produtos de um restaurante.

#### OBS: PASSAR O ID DO RESTAURANTE

#### Não necessita de AUTORIZAÇÃO por token

#### Requisição sem corpo

#### Corpo da resposta - STATUS CODE 200 - OK:

```json
[
  {
    "restaurant": {
      "_id": "62b07fb4a0832085e391a0a2"
    },
    "available": true,
    "price": 100,
    "quantityInStock": 4,
    "name": "produto1",
    "_id": "62b0c2480203f38c5b181357"
  },
  {
    "restaurant": {
      "_id": "62b07fb4a0832085e391a0a2"
    },
    "available": true,
    "price": 60,
    "quantityInStock": 8,
    "name": "produto2",
    "_id": "62b0c2480203f38c5b181356"
  },
  {
    "restaurant": {
      "_id": "62b07fb4a0832085e391a0a2"
    },
    "available": true,
    "price": 60,
    "quantityInStock": 28,
    "name": "produto3",
    "_id": "62b0c25cfceb64132b30bebd"
  }
]
```

### Possíveis erros

### Caso a requisição seja feita sem o token de um USUÀRIO

#### Corpo da resposta - STATUS CODE 401 - Unauthorized:

```json
{
  "message": "Missing authorization headers"
}
```

## REALIZAR O PEDIDO DE UM PRODUTO AO RESTAURANT

### POST /api/orderProduct/:id

### OBS: PASSAR ID DO PRODUTO QUE IRA SER COMPRADO

#### Corpo da requisição:

```json
{
  "quantity": 2
}
```

#### Corpo da resposta - STATUS CODE 200 - OK:

```json
{
  "order": {
    "orderProducts": {
      "_id": "62b277eec3f891ea8abad37f"
    },
    "user": {
      "isOwner": true,
      "name": "heitor",
      "_id": "62b2751e0a175043cdcede9c"
    },
    "price": 60,
    "quantity": 2,
    "totalPrice": 120,
    "_id": "62b277eec3f891ea8abad382"
  }
}
```

### Possíveis erros

### Caso o produto não estiver disponivel

#### Corpo da resposta - STATUS CODE 404 - no products available

```json
{
  "message": "no products available"
}
```

### Caso o pedido seja maior do que a quantidade em stock

#### Corpo da resposta - STATUS CODE 404 - no products available

```json
{
  "message": "only 2 products available"
}
```
