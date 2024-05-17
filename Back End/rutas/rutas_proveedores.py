from flask import jsonify,request
from modelos.proveedores import Proveedores
from conexiondb.database import db_session

def rutas_proveedores(app):

    @app.route('/consultar_proveedores')
    def consultar_proveedores():
        try:
            proveedores = []
            sql = Proveedores.query.all()
            for proveedor in sql:
                datos_proveedor = {
                    "id_proveedor": proveedor.id_proveedor,
                    "tipo_proveedor":proveedor.tipo_proveedor,
                    "nombre_empresa":proveedor.nombre_empresa,
                    "telefono_contacto":proveedor.telefono_contacto,
                    "nit":proveedor.nit,
                    "sello":proveedor.sello,
                    "cedula":proveedor.cedula,
                    "estado":proveedor.estado,
                    "direccion":proveedor.direccion,
                }
                proveedores.append(datos_proveedor)
            json_data = jsonify(proveedores)    
            return json_data 
        except:  
            return jsonify({"msg": "No se encontraron proveedores","estado":False})     
        
    @app.route('/consultar_proveedor/<id_proveedor>')
    def consultar_proveedor(id_proveedor):
        try:
            proveedor = Proveedores.query.filter_by(id_proveedor=id_proveedor).first()
            datos_proveedor = {
                    "id_proveedor": proveedor.id_proveedor,
                    "tipo_proveedor":proveedor.tipo_proveedor,
                    "nombre_empresa":proveedor.nombre_empresa,
                    "telefono_contacto":proveedor.telefono_contacto,
                    "nit":proveedor.nit,
                    "sello":proveedor.sello,
                    "cedula":proveedor.cedula,
                    "estado":proveedor.estado,
                    "direccion":proveedor.direccion,
                }
            json_data = jsonify(datos_proveedor)    
            return json_data
        except:    
            return jsonify({"msg": "No se encontro proveedor","estado":False})
        
    @app.route("/crear_proveedor",methods=["POST"])    
    def crear_proveedor():
        datos = request.json
        tipo_proveedor = datos.get('tipo_proveedor')
        nombre_empresa = datos.get('nombre_empresa')
        telefono_contacto = datos.get('telefono_contacto')
        nit = datos.get('nit')
        sello = datos.get('sello')
        cedula = datos.get('cedula')
        estado = datos.get('estado')
        direccion = datos.get('direccion') 
        try:
            u = Proveedores(tipo_proveedor, nombre_empresa,telefono_contacto,nit,sello,cedula,estado,direccion)
            db_session.add(u)
            db_session.commit()
            return jsonify({"msg": "Exito al crear el Proveedor","estado":True}) 
        except:    
            return jsonify({"msg": "No se pudo crear el Proveedor","estado":False})
        
    @app.route("/actualizar_proveedor/<int:id_proveedor>",methods=["PUT"]) 
    def actualizar_proveedor(id_proveedor):
        datos = request.json
        tipo_proveedor = datos.get('tipo_proveedor')
        nombre_empresa = datos.get('nombre_empresa')
        telefono_contacto = datos.get('telefono_contacto')
        nit = datos.get('nit')
        sello = datos.get('sello')
        cedula = datos.get('cedula')
        estado = datos.get('estado')
        direccion = datos.get('direccion') 
        try:
            proveedor = Proveedores.query.filter_by(id_proveedor=id_proveedor).first()
            if proveedor:
                proveedor.tipo_proveedor = tipo_proveedor
                proveedor.nombre_empresa = nombre_empresa
                proveedor.telefono_contacto = telefono_contacto
                proveedor.nit = nit
                proveedor.sello = sello
                proveedor.cedula = cedula
                proveedor.estado = estado
                proveedor.direccion = direccion
                db_session.commit()
                return jsonify({"msg": "Éxito al actualizar el proveedor", "estado": True})
            else:
                return jsonify({"msg": "No se encontró el proveedor", "estado": False})
        except Exception as e:    
            return jsonify({"msg": f"No se pudo actualizar el proveedor: {str(e)}", "estado": False})
        
    @app.route("/eliminar_proveedor/<int:id_proveedor>",methods=["DELETE"]) 
    def eliminar_proveedor(id_proveedor):
        try:
            proveedor = Proveedores.query.get(id_proveedor)
            if proveedor:
                db_session.delete(proveedor)
                db_session.commit()
                return jsonify({"msg": "proveedor eliminado exitosamente", "estado": True})
            else:
                return jsonify({"msg": "No se encontró el proveedor", "estado": False})
        except Exception as e:
            return jsonify({"msg": f"No se pudo eliminar el proveedor: {str(e)}", "estado": False})