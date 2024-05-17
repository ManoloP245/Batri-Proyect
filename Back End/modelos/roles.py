from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from conexiondb.database import Base

class Roles(Base):
    __tablename__ = 'roles'
    id_rol = Column(Integer, primary_key=True)
    nombre = Column(String(50))
    descripcion = Column(String(500))
    estado = Column(Integer)

    relacion_usuario = relationship("Usuarios", back_populates="relacion_rol")

    def __init__(self, nombre=None, descripcion=None,estado=None):
        self.nombre = nombre
        self.descripcion = descripcion
        self.estado = estado

