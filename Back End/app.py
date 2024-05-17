from flask import Flask
from rutas.rutas_roles import rutas_roles
from rutas.rutas_categorias import rutas_categorias
from rutas.rutas_usuarios import rutas_usuarios
from rutas.rutas_proveedores import rutas_proveedores

from flask_cors import CORS 

app = Flask(__name__)

CORS(app)

rutas_roles(app)
rutas_categorias(app)
rutas_usuarios(app)
rutas_proveedores(app)