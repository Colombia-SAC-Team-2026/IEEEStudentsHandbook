"""Make search accent-insensitive: Material's lunr search does not fold
diacritics, so "capitulos" would not find "capítulos". Append the folded
spelling of every accented word to each search entry, in a hidden span."""

import json
import re
import unicodedata
from pathlib import Path

WORD = re.compile(r"\w+")


def fold(text):
    return "".join(
        c for c in unicodedata.normalize("NFD", text) if unicodedata.category(c) != "Mn"
    )


def on_post_build(config):
    path = Path(config["site_dir"]) / "search" / "search_index.json"
    if not path.exists():
        return
    index = json.loads(path.read_text(encoding="utf-8"))
    for doc in index["docs"]:
        for field in ("title", "text"):  # per field, so the title keeps its search boost
            words = WORD.findall(re.sub(r"<[^>]+>", " ", doc[field]))
            folded = sorted({fold(w) for w in words if fold(w) != w})
            if folded:
                doc[field] += "<span hidden>" + " ".join(folded) + "</span>"
    path.write_text(json.dumps(index, ensure_ascii=False), encoding="utf-8")
