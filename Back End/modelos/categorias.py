from sqlalchemy import Column, Integer, String,Date
from conexiondb.database import Base

class Categorias(Base):
    __tablename__ = 'categorias'
    id_categoria = Column(Integer, primary_key=True)
    nombre = Column(String(50))
    descripcion = Column(String(500))
    estado = Column(Integer)
    fecha_categoria = Column(Date)

    def __init__(self, nombre=None, descripcion=None,estado=None,fecha_categoria= None):
        self.nombre = nombre
        self.descripcion = descripcion
        self.estado = estado
        self.fecha_categoria = fecha_categoria

