# Armazenamento de dados back-end
O projeto utilizou o json server como armazenamento de dados back-end.

# Estrutura de dados

```json
{
  "usuarios": [
    {
      "id": 1,
      "nome": "Maria",
      "email": "maria@gmail.com",
      "videosAvaliados": [
        2,
        4
      ]
    }
  ],
  "videos": [
    {
      "id": 1,
      "nome": "Como instalar Whatsapp",
      "descricao": "Como instalar whatsapp em seu celular",
      "url": "https://www.youtube.com/embed/pSzAFlKw0EA",
      "avaliacao": {
        "excelente": 41,
        "bom": 22,
        "regular": 38,
        "ruim": 15,
        "pessimo": 0
      }
    },
    {
      "id": 2,
      "nome": "Pedindo ubber",
      "descricao": "Como pedir um ubber e pagar em dinheiro.",
      "url": "https://www.youtube.com/embed/djV11Xbc914?start=1",
      "avaliacao": {
        "excelente": 11,
        "bom": 16,
        "regular": 7,
        "ruim": 12,
        "pessimo": 5
      }
    },
    {
      "id": 3,
      "nome": "Comprando passagem aérea",
      "descricao": "Como comprar passagens aéreas no 123 milhas.",
      "url": "https://www.youtube.com/embed/djV11Xbc914?start=1",
      "avaliacao": {
        "excelente": 34,
        "bom": 30,
        "regular": 21,
        "ruim": 10,
        "pessimo": 7
      }
    },
    {
      "id": "4",
      "nome": "What is Data Science",
      "descricao": "What is Data Science\n",
      "url": "https://www.youtube.com/watch?v=RBSUwFGa6Fk",
      "avaliacao": {
        "excelente": 1,
        "bom": 0,
        "regular": 0,
        "ruim": 0,
        "pessimo": 0
      }
    }
  ]
}
```
