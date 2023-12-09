# Endpoint: `GET /fabricantes`

Permite obtener información sobre todos los fabricantes que se han registrados.

## Ejemplo de Solicitud
```http
GET /fabricantes/
```

## Respuesta Exitosa (Código 200 OK)
```json
    {
        "id_fabricante": 1,
        "nombre": "Toyota",
        "pais": "Japón"
    },
    {
        "id_fabricante": 2,
        "nombre": "Ford",
        "pais": "Estados Unidos"
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