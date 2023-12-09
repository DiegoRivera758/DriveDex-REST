# Endpoint: `GET /especificaciones`

Permite obtener información sobre todas las especificaciones que se han registrado.

## Ejemplo de Solicitud
```http
GET /especificaciones/
```

## Respuesta Exitosa (Código 200 OK)
```json
    {
        "id_especificacion": 1,
        "nombre": "Potencia",
        "valor": "203 hp",
        "fk_id_modelo": 1
    },
    {
        "id_especificacion": 2,
        "nombre": "Capacidad de carga",
        "valor": "1,985 lbs",
        "fk_id_modelo": 2
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