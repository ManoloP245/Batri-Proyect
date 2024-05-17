from sqlalchemy import Column, Integer, String
from conexiondb.database import Base

class Proveedores(Base):
    __tablename__ = 'proveedores'
    id_proveedor = Column(Integer, primary_key=True)
    tipo_proveedor = Column(Integer)
    nombre_empresa = Column(String(100))
    telefono_contacto = Column(String(12))
    nit = Column(String(12))
    sello = Column(String(12))
    cedula = Column(String(12))
    estado = Column(Integer)
    direccion = Column(String(100))

    def __init__(self, tipo_proveedor=None, nombre_empresa=None, telefono_contacto=None, nit=None, sello=None, cedula=None, estado=None, direccion=None):
        self.tipo_proveedor = tipo_proveedor
        self.nombre_empresa = nombre_empresa
        self.telefono_contacto = telefono_contacto
        self.nit = nit
        self.sello = sello
        self.cedula = cedula
        self.estado = estado
        self.direccion = direccion

