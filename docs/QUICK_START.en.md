# Quick start — what actually opens

[한국어](QUICK_START.md) | **English**

Run `scripts/Print_Recipes.jsx` using Illustrator's **File → Scripts → Other Script**. A **Print Production Recipes** dialog opens. No Python, Node, or terminal is required. Double-clicking JSX in the file manager is not the supported launch path.

The dialog contains **Language, Action, Leaflet variants per batch, Bleed (mm), Run, Close**. Choosing English updates the labels and task guidance. General errors include both languages.

1. **Create 20 dummy duplex leaflets** → choose a folder → a new `dummy-master.ai` opens in Illustrator.
2. **Compact an editable AI copy** → choose a folder → a separate `print-job-…` folder contains a source snapshot, compact AI, and report. Images are not automatically converted.
3. With the original dummy active, choose **Split grouped native AI + PDF batches**, batch size **5**, bleed **3** → a new folder contains four AI files, four PDFs, the pairing ledger, a source snapshot, and report.
4. For PDFs only, use **Split duplex PDF batches**.
5. Reopen AI results and compare their PDFs against the source. Check trim content, physical bleed artwork, side IDs, and orientation separately.

Cancel submits nothing. Existing outputs are not overwritten; partial results remain available after an error. Sequential front/back pages do not replace the printer's flipping/imposition settings. Split AIs retain original IDs; check the full-source naming contract before feeding them back to the tool.

Preview `examples/pair-map.csv` and `examples/dummy-master.pdf` first. For your own files, follow the [split recipe](../recipes/02_SPLIT_LEAFLETS.en.md).

[Introduction](../README.en.md) · [Output preflight](../recipes/03_PREFLIGHT.en.md)

Tool PDFs are review canvases including actual outer bleed. The A5+3mm example has 154×216mm pages without a separate A5 trim-size TrimBox. Make final press PDFs separately from the AI using printer settings.
