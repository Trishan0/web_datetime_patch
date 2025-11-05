"""web_datetime_patch

Simple addon that patches Luxon's DateTime.toLocaleString at runtime to
always include the year when formatting locale dates/datetimes. This avoids
editing core files.
"""

from . import models  # keep package structure (no models for now)
