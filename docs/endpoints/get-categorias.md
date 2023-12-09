# Endpoint: `GET /categorias`

Permite obtener información sobre todas las categorias que se han registrado.

## Ejemplo de Solicitud
```http
GET /categorias/
```

## Respuesta Exitosa (Código 200 OK)
```json
    {
        "id_categoria": 1,
        "nombre": "Sedán"
    },
    {
        "id_categoria": 2,
        "nombre": "SUV"
    }
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "Not found."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 