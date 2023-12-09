# Endpoint: `PATCH /categoria/{id}`

Recibe una petición para actualizar la informacion de una categoría especifica.

## Ejemplo de Solicitud
```http
    PATCH /categorias/{id}
    Content-Type: application/json
    {"nombre": "Coupé"}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "message": "Successfull partial update"
}
```

## Respuestas de Errores Posibles
- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 