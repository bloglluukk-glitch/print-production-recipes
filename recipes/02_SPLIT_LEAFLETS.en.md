# 02 — Split duplex leaflet variants

[한국어](02_SPLIT_LEAFLETS.md) | **English**

## Establish pairing first

Twenty duplex variants mean forty sides. Confirm each variant's front, back, and top orientation before naming output files. A document with twenty fronts followed by twenty backs cannot be split into adjacent two-side pairs. Confirm and arrange **01 front, 01 back, 02 front, 02 back…** first.

`examples/pair-map.csv` demonstrates 20 variants/40 sides → four batches of five variants/ten sides. Printer long-edge/short-edge flipping and imposition remain separate checks.

## Input structure for automation

1. Name the full source `LF-01-FRONT`, `LF-01-BACK`, `LF-02-FRONT`, `LF-02-BACK` in that order, beginning at 01 with consecutive IDs. The tool does not infer pairing from artwork.
2. PDF-only splitting needs this name/order contract. Cross-artboard content, clipping, and layer state still require human review.
3. **For native AI splitting:** one `ARTWORK` layer with one top-level group per side, matching the artboard's name. Actual artwork must fit its own specified bleed boundary. Preserve shared backgrounds independently per side. Remove guide layers from the tool-input copy.
4. Prepare a copy or split manually when the structure differs. Hidden groups, locked layers, and cross-side groups stop the tool rather than being silently discarded. Linked images are outside scope.

## Split and verify

Save the source, then choose action, batch size, and bleed in `scripts/Print_Recipes.jsx`. A new folder contains the source snapshot, ranged AI/PDF outputs, pairing CSV, and report. Existing files are preserved. A batch size of six yields 6/6/6/2 variants, retaining the final pair.

Native splitting retains both the relevant artboards and their groups. Deleting artboards alone does not remove other variants' artwork: inspect output group counts and PDFs. Names and side order are checked before saving; split AIs retain their full-source IDs.

Check one pair first, then extend to the full set. Compare five variants/ten sides per batch and twenty variants/forty sides overall. Reopen files to inspect type, physical bleed, orientation, and boundaries. Produce final press PDFs separately with the printer's required settings.

[Quick start](../docs/QUICK_START.en.md) · [Output preflight](03_PREFLIGHT.en.md)
