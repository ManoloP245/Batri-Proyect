from sqlalchemy import Column, Integer, String,ForeignKey
from sqlalchemy.orm import relationship
from conexiondb.database import Base

class Usuarios(Base):
    __tablename__ = 'usuarios'
    id_usuario= Column(Integer, primary_key=True)
    correo = Column(String(255), unique=True)
    clave = Column(String(255))
    id_rol = Column(Integer, ForeignKey("roles.id_rol"))
    nombre = Column(String(100))
    apellido = Column(String(100))
    telefono = Column(String(15))
    cedula = Column(String(15))
    estado = Column(Integer)

    relacion_rol = relationship("Roles", back_populates="relacion_usuario")

    def __init__(self, correo=None, clave=None,id_rol=None,nombre=None,apellido=None,telefono=None,cedula=None,estado=None):
        self.correo = correo
        self.clave = clave
        self.id_rol = id_rol
        self.nombre = nombre
        self.apellido = apellido
        self.telefono = telefono
        self.cedula = cedula
        self.estado = estado

