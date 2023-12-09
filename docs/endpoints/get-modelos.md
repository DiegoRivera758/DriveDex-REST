# Endpoint: `GET /modelos`

Permite obtener información sobre todos los modelos que se han registrado.

## Ejemplo de Solicitud
```http
GET /modelos/
```

## Respuesta Exitosa (Código 200 OK)
```json
    {
        "id_modelo": 1,
        "nombre": "Camry",
        "fk_id_fabricante": 1,
        "fk_id_categoria": 1
    },
    {
        "id_modelo": 2,
        "nombre": "F-150",
        "fk_id_fabricante": 2,
        "fk_id_categoria": 4
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