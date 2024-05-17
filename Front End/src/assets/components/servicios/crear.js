// api.js
export const enviarDatos = async (url,data) => {
  try {
    const respuesta = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!respuesta.ok) {
      throw new Error('Error al enviar los datos');
    }

    const datosRespuesta = await respuesta.json();
    return datosRespuesta;
  } catch (error) {
    console.error('Hubo un error:', error);
  }
};
