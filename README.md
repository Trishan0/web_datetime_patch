# Web Datetime Patch

## Overview

`web_datetime_patch` is a small Odoo web module that forces the year to be included when the web client formats localized dates and datetimes.

The module patches Luxon's `DateTime.toLocaleString()` at runtime inside the backend assets bundle. When Odoo asks for a localized date or datetime format without an explicit year, the patch adds `year: 'numeric'` so the year is still displayed.

## Why this exists

Depending on the locale and the widget format, Odoo's web client can render date and datetime values without the year. This module keeps the year visible to avoid ambiguity in the user interface.

## Features

- Forces year display for localized date and datetime formatting in the web client.
- Applies only in the backend asset bundle.
- Keeps the caller's format object unchanged by working on a shallow copy.

## Requirements

- The standard `web` module

## Installation

1. Copy the `web_datetime_patch` folder into your Odoo addons path.
2. Update the app list from Odoo.
3. Install the module named **Web datetime year patch**.

## Usage

No configuration is required. Once installed, the patch is loaded automatically in the backend and affects the web client's localized date and datetime formatting.

## Technical notes

- The patch is implemented in [static/src/js/patch_keep_year.js](web_datetime_patch/static/src/js/patch_keep_year.js).
- The module depends only on `web` and does not add database models or demo data.

## License

This project is licensed under the terms of the [LICENSE](LICENSE) file.

## Author

Trishan Fernando
