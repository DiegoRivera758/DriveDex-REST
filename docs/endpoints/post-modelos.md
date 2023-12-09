# Endpoint: `POST /modelo`

Recibe una petición para crear un modelo.

## Ejemplo de Solicitud
```http
    POST /modelo
    Content-Type: application/json
    {
    "nombre": "Camry",
    "fk_id_fabricante": 1,
    "fk_id_categoria": 1
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