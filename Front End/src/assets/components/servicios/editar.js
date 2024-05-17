export const editar = async (urlBase, data, id) => {
  const url = `${urlBase}${id}`;
  try {
    const respuesta = await fetch(url, {
      method: 'PUT',
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
