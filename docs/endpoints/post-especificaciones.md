# Endpoint: `POST /especificaciones`

Recibe una petición para crear una especificacion.

## Ejemplo de Solicitud
```http
    POST /especificaciones
    Content-Type: application/json
    {
    "nombre": "Potencia",
    "valor": "203 hp",
    "fk_id_modelo": 1
    }
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Created"
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