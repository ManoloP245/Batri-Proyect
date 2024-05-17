from flask import jsonify,request
from modelos.roles import Roles
from conexiondb.database import db_session

def rutas_roles(app):

    @app.route('/consultar_roles')
    def consultar_roles():
        try:
            roles = []
            sql = Roles.query.all()
            for rol in sql:
                datos_rol = {
                    "id_rol": rol.id_rol,
                    "nombre":rol.nombre,
                    "descripcion":rol.descripcion,
                    "estado":rol.estado,
                }
                roles.append(datos_rol)
            json_data = jsonify(roles)    
            return json_data 
        except Exception as e:  
            return jsonify({"msg": f"No se encontraron roles {e}","estado":False})     
        
    @app.route('/consultar_rol/<id_rol>')
    def consultar_rol(id_rol):
        try:
            rol = Roles.query.filter_by(id_rol=id_rol).first()
            datos_rol = {
                "id_rol": rol.id_rol,
                "nombre":rol.nombre,
                "descripcion":rol.descripcion,
                "estado":rol.estado,
            }
            json_data = jsonify(datos_rol)    
            return json_data
        except:    
            return jsonify({"msg": "No se encontro rol","estado":False})
        
    @app.route("/crear_rol",methods=["POST"])    
    def crear_rol():
        datos = request.json
        nombre = datos.get('nombre')
        descripcion = datos.get('descripcion')
        estado = datos.get('estado')
        try:
            crear = Roles(nombre, descripcion,estado)
            db_session.add(crear)
            db_session.commit()
            return jsonify({"msg": "Exito al crear el rol","estado":True}) 
        except:    
            return jsonify({"msg": "No se pudo crear el rol","estado":False})
        
    @app.route("/actualizar_rol/<int:id_rol>",methods=["PUT"]) 
    def actualizar_rol(id_rol):
        datos = request.json
        nombre = datos.get('nombre')
        descripcion = datos.get('descripcion')
        estado = datos.get('estado')
        try:
            rol = Roles.query.filter_by(id_rol=id_rol).first()
            if rol:
                rol.nombre = nombre
                rol.descripcion = descripcion
                rol.estado = estado
                db_session.commit()
                return jsonify({"msg": "Éxito al actualizar el rol", "estado": True})
            else:
                return jsonify({"msg": "No se encontró el rol", "estado": False})
        except Exception as e:    
            return jsonify({"msg": f"No se pudo actualizar el rol: {str(e)}", "estado": False})
        
    @app.route("/eliminar_rol/<int:id_rol>",methods=["DELETE"]) 
    def eliminar_rol(id_rol):
        try:
            rol = Roles.query.get(id_rol)
            if rol:
                db_session.delete(rol)
                db_session.commit()
                return jsonify({"msg": "Rol eliminado exitosamente", "estado": True})
            else:
                return jsonify({"msg": "No se encontró el rol", "estado": False})
        except Exception as e:
            return jsonify({"msg": f"No se pudo eliminar el rol: {str(e)}", "estado": False})