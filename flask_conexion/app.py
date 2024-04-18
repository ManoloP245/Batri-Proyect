from flask import Flask, jsonify, request
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_mysqldb import MySQL
import datetime

app = Flask(__name__)
CORS(app)

# Configuración de la base de datos MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'batri'

mysql = MySQL(app)
ma = Marshmallow(app)


class UserSchema(ma.Schema):
    class Meta:
        fields = ('Id_usuario', 'Nombre', 'Apellido', 'Cedula', 'Correo', 'tipo', 'Fecha', 'Estado')


user_schema = UserSchema()
users_schema = UserSchema(many=True)


@app.route('/listusers', methods=['GET'])
def listusers():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT Id_usuario, Nombre, Apellido, Cedula, Correo, tipo, Fecha, Estado FROM usuarios")
        result = cur.fetchall()
        cur.close()
        return jsonify(result)
    except Exception as e:
        print(f"Error en la ruta /listusers: {str(e)}")
        return jsonify({"error": "Error interno del servidor"}), 500


@app.route('/userdetails/<Id_usuario>', methods=['GET'])
def userdetails(Id_usuario):
    print("Id_usuario:", Id_usuario)
    print("Id_usuario:", Id_usuario)
    print("Id_usuario:", Id_usuario)
    print("Id_usuario:", Id_usuario)
    print("Id_usuario:", Id_usuario)
    print("Id_usuario:", Id_usuario)
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM usuarios WHERE Id_usuario = %s", (Id_usuario,))
    result = cur.fetchone()
    cur.close()
    return jsonify(result)


@app.route('/userupdate/<Id_usuario>', methods=['PUT'])
def userupdate(Id_usuario):
    print("Id_usuario:", Id_usuario)
    print("Id_usuario:", Id_usuario)
    print("Id_usuario:", Id_usuario)
    print("Id_usuario:", Id_usuario)
    print("Id_usuario:", Id_usuario)
    print("Id_usuario:", Id_usuario)
    print("Id_usuario:", Id_usuario)
    cur = mysql.connection.cursor()
    user = cur.execute("SELECT * FROM usuarios WHERE Id_usuario = %s", (Id_usuario,))

    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404

    try:
        data = request.json
        cur.execute("""
            UPDATE usuarios
            SET Nombre=%s, Apellido=%s, Correo=%s, tipo=%s, Estado=%s, Direccion=%s, Telefono=%s
            WHERE Id_usuario=%s
        """, (data.get('Nombre'), data.get('Apellido'), data.get('Correo'),
              data.get('tipo'), data.get('Estado'), data.get('Direccion'),
              data.get('Telefono'), Id_usuario))

        mysql.connection.commit()
        cur.close()
        return jsonify(success=True), 200
    except Exception as e:
        print(f"Se produjo un error: {str(e)}")
        return jsonify(error="Error interno del servidor"), 500


@app.route('/userdelete/<int:Id_usuario>', methods=['DELETE'])
def userdelete(Id_usuario):
    cur = mysql.connection.cursor()
    user = cur.execute("SELECT * FROM usuarios WHERE Id_usuario = %s", (Id_usuario,))

    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404

    cur.execute("DELETE FROM usuarios WHERE Id_usuario = %s", (Id_usuario,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "Usuario eliminado"})


@app.route('/useradd', methods=['POST'])
def useradd():
    try:
        data = request.json
        cur = mysql.connection.cursor()

        # Añadir la fecha actual al objeto de datos antes de insertarlo en la base de datos
        data['Fecha'] = datetime.datetime.now()

        cur.execute("""
            INSERT INTO usuarios (Nombre, Apellido, Cedula, Correo, tipo, Estado, Clave, Telefono, Direccion, Fecha)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (data.get('Nombre'), data.get('Apellido'), data.get('Cedula'), data.get('Correo'),
              data.get('tipo'), data.get('Estado'), data.get('Clave'), data.get('Telefono'),
              data.get('Direccion'), data.get('Fecha')))

        mysql.connection.commit()
        cur.close()
        return user_schema.jsonify(data)
    except KeyError as e:
        return jsonify({"error": f"La clave '{e.args[0]}' no se proporcionó en el cuerpo de la solicitud."}), 400


if __name__ == '__main__':
    app.run(debug=True)
