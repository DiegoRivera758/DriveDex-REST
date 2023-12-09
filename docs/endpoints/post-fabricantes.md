# Endpoint: `POST /fabricantes`

Recibe una petición para crear un fabricante.

## Ejemplo de Solicitud
```http
    POST /fabricantes
    Content-Type: application/json
    {
    "nombre": "Honda",
    "pais": "Japón"
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