from flask import jsonify,request
from modelos.categorias import Categorias
from conexiondb.database import db_session
from datetime import datetime
from servicios.mensajes_validaciones import *
def rutas_categorias(app):

    @app.route('/consultar_categorias')
    def consultar_categorias():
        try:
            categorias = []
            sql = Categorias.query.all()
            for categoria in sql:
                datos_categoria = {
                    "id_categoria": categoria.id_categoria,
                    "nombre":categoria.nombre,
                    "descripcion":categoria.descripcion,
                    "estado":categoria.estado,
                    "fecha_categoria":categoria.fecha_categoria.strftime('%d/%m/%Y'),
                }
                categorias.append(datos_categoria)
            json_data = jsonify(categorias)    
            return json_data 
        except:  
            return jsonify({"msg": mensaje_error_consultar(),"estado":False})     
        
    @app.route('/consultar_categoria/<id_categoria>')
    def consultar_categoria(id_categoria):
        try:
            categoria = Categorias.query.filter_by(id_categoria=id_categoria).first()
            datos_categoria = {
                    "id_categoria": categoria.id_categoria,
                    "nombre":categoria.nombre,
                    "descripcion":categoria.descripcion,
                    "estado":categoria.estado,
                }
            json_data = jsonify(datos_categoria)    
            return json_data
        except:    
            return jsonify({"msg": mensaje_dato_no_encontrado(),"estado":False})
        
        
    @app.route("/crear_categoria",methods=["POST"])    
    def crear_categoria():
        datos = request.json
        nombre = datos.get('nombre')
        descripcion = datos.get('descripcion')
        estado = str(datos.get('estado'))
        fecha_categoria = datetime.now()

        if nombre == '' or descripcion == '' or estado == None:
            return jsonify({"msg": campos_vacios(),"estado":False}) 
        else:   
            if not estado.isalpha() or int(estado):
                if int(estado) == 0 or int(estado) == 1:   
                    try:
                        crear= Categorias(nombre, descripcion,estado,fecha_categoria)
                        db_session.add(crear)
                        db_session.commit()
                        return jsonify({"msg": mensaje_exito_crear("categoria"),"estado":True}) 
                    except Exception as e:    
                        return jsonify({"msg": f"{mensaje_error_crear("categoria")+ ":" +  str(e)}","estado":False})       
                else:
                    return jsonify({"msg": mensaje_error_estado(), "estado": False})  
            else:
                return jsonify({"msg": mensaje_error_formato(),"estado":False})  
        
    @app.route("/actualizar_categoria/<int:id_categoria>",methods=["PUT"]) 
    def actualizar_categoria(id_categoria):
        datos = request.json
        nombre = datos.get('nombre')
        descripcion = datos.get('descripcion')
        estado = datos.get('estado')
        if nombre == '' or descripcion == '' or estado == None:
            return jsonify({"msg": campos_vacios(),"estado":False}) 
        else:
            if not estado.isalpha() or int(estado):
                if int(estado) == 0 or int(estado) == 1:
                    try:
                        categoria = Categorias.query.filter_by(id_categoria=id_categoria).first()
                        if categoria:
                            categoria.nombre = nombre
                            categoria.descripcion = descripcion
                            categoria.estado = estado
                            db_session.commit()
                            return jsonify({"msg": mensaje_exito_actualizar("categoria"), "estado": True})
                        else:
                            return jsonify({"msg": mensaje_dato_no_encontrado(), "estado": False})
                    except Exception as e:    
                        return jsonify({"msg": f"{mensaje_error_crear("categoria")+ ":" + str(e)}", "estado": False})
                else:
                    return jsonify({"msg": mensaje_error_estado(), "estado": False})  
            else:
                return jsonify({"msg": mensaje_error_formato(),"estado":False}) 

    @app.route("/desactivar_categoria/<int:id_categoria>",methods=["PUT"]) 
    def desactivar_categoria(id_categoria):
        datos = request.json
        estado = str(datos.get('estado'))
        if estado == '':
            return jsonify({"msg": campos_vacios(),"estado":False}) 
        else:
            if not estado.isalpha() or int(estado) :
                if int(estado) == 0 or int(estado) == 1:
                    try:
                        categoria = Categorias.query.filter_by(id_categoria=id_categoria).first()
                        if categoria:
                            categoria.estado = estado
                            db_session.commit()
                            return jsonify({"msg": mensaje_exito_desactivar("categoria"), "estado": True})
                        else:
                            return jsonify({"msg": mensaje_dato_no_encontrado(), "estado": False})
                    except Exception as e:
                        return jsonify({"msg": f" {mensaje_error_desactivar("categoria")+ ":" +str(e)}", "estado": False}) 
                else:
                   return jsonify({"msg": mensaje_error_estado(), "estado": False})      
            else:
                return jsonify({"msg": mensaje_error_formato(),"estado":False})      
                         

    