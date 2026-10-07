# Print Production Recipes — public report

[한국어](RELEASE_REPORT.md) | **English**

v0.1.0 · 2026-10-07 · [Repository](https://github.com/bloglluukk-glitch/print-production-recipes)

## What is published

Three bilingual practical recipes: compact large Illustrator documents, split duplex leaflet variants, and preflight delivery. The Illustrator tool opens a real dialog with language, action, batch-size, and bleed controls. Download and run through File → Scripts → Other Script. No Python or terminal is required. `START_HERE.html` is an offline bilingual reader.

Actions create a self-authored 20-variant dummy, compact an AI copy, split PDF batches, or split qualifying independent side groups into native AI/PDF batches. New job folders preserve a byte-copy snapshot and existing outputs. Client artwork is excluded; print files are not sent to a website.

## The 32 files

| Component | Files | Contents |
| --- | ---: | --- |
| Bilingual documents | 16 | Introduction, quick start, three recipes, sources, contributing, this report; each in two languages |
| Runtime/checks | 3 | Illustrator dialog, shared implementation, optional developer checks |
| Self-authored examples | 8 | Full PDF, four five-variant PDFs, twenty-pair PNG preview, CSV ledger, JSON specification |
| Validation | 1 | Actual Adobe execution, comparisons, measurements, scope |
| Offline guide | 1 | Bilingual HTML reader |
| Publication controls | 3 | MIT, ignore rules, SHA-256 manifest |

[Manifest](../UPLOAD_MANIFEST.json) · [Dummy preview](../examples/dummy-contact-sheet.png)

## Actual validation

Created and tested twenty CMYK A5 duplex variants/forty sides in Illustrator **30.5.1** on Windows. All **20/20** structural/rejection checks passed. The compact AI reopened with forty artboards and forty groups. Four split AIs reopened with ten artboards/ten groups each, retaining original IDs and side order.

Compared forty compact sides, forty native-split PDF sides, and forty PDF-only split sides against the source review PDF: **120 rendered comparisons, largest mean channel difference 0.0**, at 72ppi. Checked physical bleed at four corners per side (160 positions), three source snapshots matched the master hash, and twenty pairing rows matched.

The synthetic AI decreased from **1,348,935 to 1,308,995 bytes, 2.96%**. Both saves used compression; PDF compatibility differed, and no image conversion was performed. This small simple dummy does not represent large-file performance. A historical roughly 1.93GB→184MB observation belongs to a separate private client job and is not reported as this tool's result.

Both language layouts and the ScriptUI language switch were constructed/checked inside Illustrator without showing a modal window. Human interactive button-use testing remains unperformed. [Full validation](VALIDATION.json)

## Problem found and resolved

In the tested host, PDF bleed offsets did not include outer artwork. Output-box checks caught the difference rather than trusting assigned settings. The tool now temporarily expands copy artboards to include physical outer artwork in review PDFs. Source AI and saved split AI retain A5 trim artboards.

The A5+3mm review PDF has **154×216mm** pages without a separate A5 trim-size TrimBox. Make final press PDFs separately from the source AI with printer-specified bleed, PDF/X, profile, and marks. Automation stops if review bleed canvases overlap another side.

## Supported boundaries

Full sources must begin at LF-01-FRONT/BACK and continue in sequence. Native splitting requires one ARTWORK layer, independently named side groups, and artwork within the stated bleed boundary. Linked images, multiple layers, shared/hidden groups, and other structures require manual preparation. The tool does not infer visual pairing or solve imposition/duplex flipping.

Selective JPEG/raster replacement is a manual recipe, not an automatically tested feature. Physical press proofs: **zero**. PDF/X certification, physical print quality, color accuracy, other Illustrator versions, and macOS execution are unverified.

## Pre-publication privacy and rights review

Excluded client AI/artwork, identities, client filenames, workstation paths, internal conversations, original font files, and credentials. Public PDFs contain only self-authored dummies with author/creator/XMP metadata removed. Native AI binaries are not published; users generate them through the tool. The PNG has no added hidden metadata.

Checked the public inventory, local document references, text/JSON/CSV, PDF text/metadata/external links, PNG metadata, and personal-information/credential patterns. No actual personal/client patterns were found. Public attribution uses the GitHub handle and fresh commits use the GitHub privacy email. Client originals were not edited, saved, or moved.

MIT covers public code, documents, and self-authored examples, excluding Adobe documents/trademarks/software and outside designs. [Sources and claims](../SOURCES.en.md)

[English quick start](QUICK_START.en.md) · [한국어 시작하기](QUICK_START.md)
