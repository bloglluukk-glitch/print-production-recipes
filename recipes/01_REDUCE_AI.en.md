# 01 — Compact large Illustrator files

[한국어](01_REDUCE_AI.md) | **English**

## When to use it

Editing or saving slows down because many artboards contain heavy posters/images. Decide which editability, image quality, and interoperability requirements must survive. Small file size alone does not establish print suitability.

## Procedure

1. Preserve the original AI; record bytes, artboard count, links, and fonts. Name source, editable copy, and output PDF separately.
2. Find heavy poster/image regions instead of flattening the entire document. Keep their source artwork, placement coordinates, dimensions, clipping, and bleed coverage.
3. **If selective image conversion is needed, do it manually:** render/rasterize only the region in a copy, checking effective resolution at placed size and the printer's color-profile requirements. JPEG is lossy and has no transparency. Decide separately whether small text, lines, QR codes, and logos should remain vector. The tool does not perform image conversion.
4. Replace at the recorded position and dimensions. Physical artwork must extend beyond trim. Larger bleed settings or cloned edge pixels do not automatically produce appropriate artwork. Compare at 100% and obtain physical proofs when needed.
5. For a saved AI with embedded assets only, run **Compact an editable AI copy**. Treat the non-PDF-compatible AI as an Illustrator editing file and check preview/placement requirements in other applications separately. [Adobe save-option background](https://helpx.adobe.com/illustrator/kb/optimize-native-pdf-file-sizes.html)
6. Make the press PDF separately using the printer's settings. Reducing PDF editing data is distinct from retaining an editable master. Preserve linked assets with [Package](https://helpx.adobe.com/illustrator/using/package-files.html), then reopen them.
7. Compare artwork, color, text, bleed, resolution, and editability as well as bytes. Record changes and retain the rollback source.

## Failures and recovery

- Blur after replacement: check effective placed resolution and render bounds; restore the source.
- White gaps or stretched bleed: correct actual artwork and clipping; do not rely on blind mirroring.
- No AI preview in another app: provide an appropriate compatible copy or separate PDF.
- Missing links: package assets and reopen in the receiving environment.

## Observation boundaries

One personal work record documents roughly 1.93GB → 184MB after multiple changes. It is not evidence of a single option's performance. Public measurements are separately recorded for the self-authored dummy in [validation](../docs/VALIDATION.json). These checks do not establish large-file performance, JPEG replacement quality, or physical print quality.

[Split recipe](02_SPLIT_LEAFLETS.en.md) · [Delivery preflight](03_PREFLIGHT.en.md)
