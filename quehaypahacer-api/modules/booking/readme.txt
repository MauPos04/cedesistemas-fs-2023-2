-> post /booking /

params: idEvent
return: success (200) /failed(40x)

failed: cuando no hay cupos en ese evento

1. Vamos a registrar el susuario al evento
2. Validar que si exista disponibilidad en ese evento

model: booking: {
    idEvent,
    idUser  // a partir del token sacamos el id del usuario
}