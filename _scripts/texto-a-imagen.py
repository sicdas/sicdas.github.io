#!/usr/bin/env python3
"""Convierte el correo y el teléfono en imágenes PNG (contra el spam).

Uso (desde la raíz del repositorio):
    python3 _scripts/texto-a-imagen.py "correo@unmsm.edu.pe" "+51 999 999 999"

Genera cuatro imágenes en assets/2026/images/contacto/:
    correo.png, telefono.png          -> sección Contacto (gris claro, normal)
    correo-pie.png, telefono-pie.png  -> pie de página (blanco, negrita)
Necesita Pillow:  pip install pillow
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ESCALA = 3  # se dibuja 3 veces más grande para que se vea nítido en pantallas retina
RAIZ = Path(__file__).resolve().parent.parent
FUENTES = RAIZ / "_scripts" / "fuentes"
SALIDA = RAIZ / "assets" / "2026" / "images" / "contacto"

# nombre -> (fuente, tamaño en px de la página, color)
ESTILOS = {
    "": ("Outfit-Regular.ttf", 16, "#A9B6C4"),
    "-pie": ("Outfit-Bold.ttf", 14, "#FFFFFF"),
}


def dibujar(texto, fuente, tamano, color, destino):
    font = ImageFont.truetype(str(FUENTES / fuente), tamano * ESCALA)
    subida, bajada = font.getmetrics()
    ancho = int(font.getlength(texto)) + 2 * ESCALA
    img = Image.new("RGBA", (ancho, subida + bajada), (0, 0, 0, 0))
    ImageDraw.Draw(img).text((ESCALA, 0), texto, font=font, fill=color)
    img.save(destino, optimize=True)
    print(f"{destino.relative_to(RAIZ)}  ({ancho // ESCALA}x{(subida + bajada) // ESCALA} px)")


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    correo, telefono = sys.argv[1], sys.argv[2]
    SALIDA.mkdir(parents=True, exist_ok=True)
    for sufijo, (fuente, tamano, color) in ESTILOS.items():
        dibujar(correo, fuente, tamano, color, SALIDA / f"correo{sufijo}.png")
        dibujar(telefono, fuente, tamano, color, SALIDA / f"telefono{sufijo}.png")


if __name__ == "__main__":
    main()
