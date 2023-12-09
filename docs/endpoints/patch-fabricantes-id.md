# Endpoint: `PATCH /fabricantes/{id}`

Recibe una petición para actualizar la informacion de un fabricante especifico.

## Ejemplo de Solicitud
```http
    PATCH /fabricantes/{id}
    Content-Type: application/json
    {"nombre": "Honda"}
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