from sqlalchemy import create_engine

from sqlalchemy.orm import scoped_session, sessionmaker, declarative_base
from configuracion.config import DB_USER,DB_PASSWORD,DB_HOST,DB_NAME


# Crear el motor de la base de datos MySQL
engine = create_engine(f'mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}')

# Configurar la sesión de la base de datos
db_session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))

# Crear la base declarativa
Base = declarative_base()
Base.query = db_session.query_property()

def init_db():
    # Importar los modelos de tu aplicación
    import modelos
    # Crear las tablas en la base de datos
    Base.metadata.create_all(bind=engine)