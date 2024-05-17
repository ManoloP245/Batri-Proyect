from flask import jsonify,request
from modelos.usuarios import Usuarios
from conexiondb.database import db_session

def rutas_usuarios(app):
    @app.route('/consultar_usuarios')
    def consultar_usuarios():
        try:
            usuarios = []
            sql = Usuarios.query.all()
            for usuario in sql:
                datos_usuario = {
                    "id_usuario":usuario.id_usuario,
                    "correo":usuario.correo,
                    "clave":usuario.clave,
                    "id_rol":usuario.id_rol,
                    "nombre_rol":usuario.relacion_rol.nombre,
                    "nombre":usuario.nombre,
                    "apellido":usuario.apellido,
                    "telefono":usuario.telefono,
                    "cedula":usuario.cedula,
                    "estado":usuario.estado
                }
                usuarios.append(datos_usuario)
            json_data = jsonify(usuarios)    
            return json_data 
        except:  
            return jsonify({"msg": "No se encontraron usuarios","estado":False})     
        
    @app.route('/consultar_usuario/<id_usuario>')
    def consultar_usuario(id_usuario):
        try:
            usuario = Usuarios.query.filter_by(id_usuario=id_usuario).first()
            datos_usuario = {
                        "id_usuario":usuario.id_usuario,
                        "correo":usuario.correo,
                        "clave":usuario.clave,
                        "id_rol":usuario.id_rol,
                        "nombre_rol":usuario.relacion_rol.nombre,
                        "nombre":usuario.nombre,
                        "apellido":usuario.apellido,
                        "telefono":usuario.telefono,
                        "cedula":usuario.cedula,
                        "estado":usuario.estado
                    }
            json_data = jsonify(datos_usuario)    
            return json_data
        except:    
            return jsonify({"msg": "No se encontro usuarios","estado":False})
        
    @app.route("/crear_usuario",methods=["POST"])    
    def crear_usuario():
        datos = request.json
        correo = datos.get('correo')
        clave = datos.get('clave')
        id_rol = datos.get('id_rol')
        nombre = datos.get('nombre')
        apellido = datos.get('apellido')
        telefono = datos.get('telefono')
        cedula = datos.get('cedula')
        estado = datos.get('estado')
        try:
            u = Usuarios(correo, clave,id_rol,nombre,apellido,telefono,cedula,estado)
            db_session.add(u)
            db_session.commit()
            return jsonify({"msg": "Exito al crear el usuario","estado":True}) 
        except:    
            return jsonify({"msg": "No se pudo crear el usuario","estado":False})
        
    @app.route("/actualizar_usuario/<int:id_usuario>",methods=["PUT"]) 
    def actualizar_usuario(id_usuario):
        datos = request.json
        correo = datos.get('correo')
        clave = datos.get('clave')
        id_rol = datos.get('id_rol')
        nombre = datos.get('nombre')
        apellido = datos.get('apellido')
        telefono = datos.get('telefono')
        cedula = datos.get('cedula')
        estado = datos.get('estado')
        try:
            usuario = Usuarios.query.filter_by(id_usuario=id_usuario).first()
            if usuario:
                usuario.correo = correo
                usuario.clave = clave
                usuario.id_rol = id_rol
                usuario.nombre = nombre
                usuario.apellido = apellido
                usuario.telefono = telefono
                usuario.cedula = cedula
                usuario.estado = estado
                db_session.commit()
                return jsonify({"msg": "Éxito al actualizar el usuario", "estado": True})
            else:
                return jsonify({"msg": "No se encontró el usuario", "estado": False})
        except Exception as e:    
            return jsonify({"msg": f"No se pudo actualizar el usuario: {str(e)}", "estado": False})
        
    @app.route("/eliminar_usuario/<int:id_usuario>",methods=["DELETE"]) 
    def eliminar_usuario(id_usuario):
        try:
            usuario = Usuarios.query.get(id_usuario)
            if usuario:
                db_session.delete(usuario)
                db_session.commit()
                return jsonify({"msg": "usuario eliminado exitosamente", "estado": True})
            else:
                return jsonify({"msg": "No se encontró el usuario", "estado": False})
        except Exception as e:
            return jsonify({"msg": f"No se pudo eliminar el usuario: {str(e)}", "estado": False})