# Print Production Recipes

[한국어](README.md) | **English**

**Practical workflows for compact Illustrator files and correctly paired batches of duplex leaflets.**

Includes Korean/English recipes, checklists, a self-authored 20-variant/40-side dummy, and a **bilingual dialog that runs inside Illustrator**. This is neither training data nor a web app. Illustrator is required; a terminal and Python are not required for everyday use.

## Run first

1. Download the [release ZIP](https://github.com/bloglluukk-glitch/print-production-recipes/releases) or use GitHub Code → Download ZIP, then extract it.
2. In Illustrator, use **File → Scripts → Other Script** and select `scripts/Print_Recipes.jsx`. Keep `scripts/lib` alongside it.
3. Choose a language and **Create 20 dummy duplex leaflets**. A new AI document opens.
4. Run the tool again and choose **Compact an editable AI copy** or **Split grouped native AI + PDF batches**. Five variants per batch produces four batches of ten sides.

[Quick start and actual interface behavior](docs/QUICK_START.en.md) · Open `START_HERE.html` after extraction for the bilingual browser guide. The HTML is a reader, not an Illustrator execution interface.

## Recipes

| Goal | Practical content |
| --- | --- |
| [Compact large AI files](recipes/01_REDUCE_AI.en.md) | Separate source, editable copy, and output PDF; selectively handle heavy image regions |
| [Split duplex leaflet variants](recipes/02_SPLIT_LEAFLETS.en.md) | Front/back ledger, artboard order, independent groups, five-variant batches |
| [Delivery preflight](recipes/03_PREFLIGHT.en.md) | Physical bleed, pairing, type/color/links, PDFs, reopening |

## Tool behavior

- **Compact AI copy:** saves a new compressed editable AI without PDF compatibility. No source overwrite or automatic image downsampling.
- **Split PDF batches:** exports review PDFs from explicitly named, ordered front/back artboards.
- **Split grouped native AI:** retains only the relevant side groups in each AI and exports a review PDF. It removes other variants' artwork as well as their artboards.
- Each new job folder preserves a byte-copy snapshot and, for splits, `pair-map.csv`. The source document is neither edited nor saved.

Splitting requires **LF-01-FRONT, LF-01-BACK, LF-02-FRONT, LF-02-BACK…**. Native AI splitting additionally requires one `ARTWORK` layer, one independently named group per artboard, and artwork within the specified bleed boundary. Linked files are outside the automatic tool scope: package them and use the manual recipe. This is not a universal print-file splitter.

## Evidence and validation

Personal work records contain one AI reduction from roughly 1.93GB to 184MB after image handling and other changes. Those are historical file-size observations, not reproduced results or promised savings from this tool. Client originals, names, and paths are excluded.

Actual execution in Illustrator 30.5.1 passed 20 structural checks and 120 rendered side comparisons. The small dummy compacted by 2.96%; this is not large-file performance or physical press validation.

[Dummy validation](docs/VALIDATION.json) · [Detailed public report](docs/RELEASE_REPORT.en.md) · [Adobe background and scope](SOURCES.en.md) · [Public manifest](UPLOAD_MANIFEST.json)

A5, 3mm, and CMYK are conditions of this example. The printer's PDF/X, ICC profile, resolution, marks, and duplex imposition requirements must be set separately. Automatic PDFs are review proofs, not press certification or physical proofs. Selective rasterization changes editability and potentially quality and is covered as a manual choice.

[MIT License](LICENSE) covers public code, documents, and self-authored dummies. Adobe software/documents/trademarks and third-party designs are excluded. Creator: [bloglluukk-glitch](https://github.com/bloglluukk-glitch). Codex assisted with the public tool, dummies, and translations. [Contributing](CONTRIBUTING.en.md)

Tool PDFs are review canvases including actual outer bleed. The A5+3mm example has 154×216mm pages without a separate A5 trim-size TrimBox. Make final press PDFs separately from the AI using printer settings.
