from __future__ import annotations

import argparse
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageOps


@dataclass(frozen=True)
class Photo:
    source: str
    target: str
    max_side: int


PHOTOS = (
    Photo("instagram/04-loja-ambiente/instagram-017.jpg", "ambiente/salao-parede-vermelha-guitarra.webp", 2000),
    Photo("instagram/01-lanches/instagram-079.jpg", "lanches/hamburguer-camadas-bacon.webp", 2000),
    Photo("instagram/04-loja-ambiente/instagram-003.jpg", "ambiente/forno-lenha-aceso.webp", 1600),
    Photo("facebook/04-loja-ambiente/facebook-062.jpg", "ambiente/deck-mesas-madeira-vista.webp", 1600),
    Photo("instagram/01-lanches/instagram-005.jpg", "lanches/torrada-frango-molho.webp", 1600),
    Photo("instagram/01-lanches/instagram-097.jpg", "lanches/lanche-cestinha-salada.webp", 1600),
    Photo("instagram/01-lanches/instagram-088.jpg", "lanches/hot-dog-tomate-cebola.webp", 1600),
    Photo("instagram/02-porcoes/instagram-060.jpg", "porcoes/fritas-cheddar-bacon.webp", 1600),
    Photo("instagram/02-porcoes/instagram-022.jpg", "porcoes/frango-passarinho-fritas.webp", 1600),
    Photo("facebook/02-porcoes/facebook-039.jpg", "porcoes/polenta-frita-molho.webp", 1600),
    Photo("instagram/02-porcoes/instagram-095.jpg", "porcoes/carne-acebolada.webp", 1600),
    Photo("google/03-bebidas/google-001.jpg", "bebidas/milkshake-chocolate-chantilly.webp", 1600),
    Photo("instagram/03-bebidas/instagram-085.jpg", "bebidas/drink-vermelho-limao.webp", 1600),
)


def save_webp(source: Path, target: Path, max_side: int, quality: int = 80) -> None:
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGB")
        image.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
        target.parent.mkdir(parents=True, exist_ok=True)
        image.save(target, "WEBP", quality=quality, method=6)


def save_social_image(source: Path, target: Path) -> None:
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGB")
        image = ImageOps.fit(
            image,
            (1200, 630),
            method=Image.Resampling.LANCZOS,
            centering=(0.5, 0.58),
        )
        target.parent.mkdir(parents=True, exist_ok=True)
        image.save(target, "WEBP", quality=82, method=6)


def save_logo(source: Path, target: Path) -> None:
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGBA")
        image.thumbnail((384, 384), Image.Resampling.LANCZOS)
        target.parent.mkdir(parents=True, exist_ok=True)
        image.save(target, "WEBP", quality=88, method=6)


def main() -> None:
    parser = argparse.ArgumentParser(description="Prepara as imagens selecionadas do Rock Burguer's.")
    parser.add_argument("--source", type=Path, required=True, help="Pasta com facebook/, google/ e instagram/.")
    parser.add_argument("--output", type=Path, default=Path("public/img"), help="Destino das imagens WebP.")
    args = parser.parse_args()

    for photo in PHOTOS:
        source = args.source / photo.source
        target = args.output / photo.target
        if not source.is_file():
            raise FileNotFoundError(source)
        save_webp(source, target, photo.max_side)

    social_source = args.source / "facebook/04-loja-ambiente/facebook-034.jpg"
    save_social_image(social_source, args.output / "ambiente/rock-burguers-compartilhamento.webp")

    logo_source = Path("src/assets/logo-rock-burguers.png")
    if not logo_source.is_file():
        raise FileNotFoundError(logo_source)
    save_logo(logo_source, args.output / "marca/logo-rock-burguers.webp")

    print(f"Imagens preparadas em {args.output.resolve()}")


if __name__ == "__main__":
    main()
