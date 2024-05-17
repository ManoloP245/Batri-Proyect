
import random
import string

def clave_aleatoria():
    caracteres = string.ascii_letters + string.digits
    return ''.join(random.choice(caracteres) for _ in range(4))
