{
    "name": "Web datetime year patch",
    "version": "1.0",
    "category": "Hidden",
    "summary": "Ensure year is always shown for localized dates/datetimes in the web client",
    "description": "Small runtime patch: forces year to be included in localized date/datetime strings",
    "author": "Patch",
    "depends": ["web"],
    "data": [],
    "assets": {
        "web.assets_backend": [
            "web_datetime_patch/static/src/js/patch_keep_year.js"
        ]
    },
    "installable": True,
    "application": False,
    "auto_install": False,
}
