# Endpoint: `PATCH /especificaciones/{id}`

Recibe una petición para actualizar la informacion de una especificacion especifica.

## Ejemplo de Solicitud
```http
    PATCH /especificaciones/{id}
    Content-Type: application/json
    {
    "id_especificacion": 1,
    "nombre": "Potencia",
    "valor": "203 hp",
    "fk_id_modelo": 1
    }
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