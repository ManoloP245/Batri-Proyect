#mensaje de campos vacios
def campos_vacios():
    return 'Error, algunos datos estan vacios'
#mensaje de validacion cuando el formato no corresponde
def mensaje_error_formato():
    return 'Error, ingresa el formato correcto'
#mensaje de validacion cuando verifica el estado
def mensaje_error_estado():
    return 'Error,Solo se permite 0 o 1 inactivo o activo'
#mensaje de exito al crear

def mensaje_error_consultar():
    return 'No se encontraron categorias'
def mensaje_exito_crear(modulo):
    return 'Éxito al crear '+modulo  
#mensaje del except al crear (try-except) 
def mensaje_error_crear(modulo):
    return 'No se pudo crear '+modulo  
 #mensaje cuando se hace el filter y no se encuentra el registro
def mensaje_dato_no_encontrado(modulo):
    return 'No se encontro '+modulo 
#mensaje de exito al actualizar
def mensaje_exito_actualizar(modulo):
    return 'Éxito al actualizar '+modulo 
#mensaje del except al actualizar (try-except)  
def mensaje_error_actualizar(modulo):
    return 'No se pudo actualiza '+modulo   
#mensaje de exito al desactivar
def mensaje_exito_desactivar(modulo):
    return 'cambio de estado exitoso de '+modulo 
#mensaje del except al desactivar (try-except)   
def mensaje_error_desactivar(modulo):
    return 'No se pudo desactivar  '+modulo
  