/** @odoo-module */
(function () {
    // Guard: luxon must be present
    try {
        const { DateTime } = luxon;
        const orig = DateTime.prototype.toLocaleString;

        // Wrap toLocaleString to ensure year is included in the format object
        DateTime.prototype.toLocaleString = function (format) {
            try {
                // If a format object is provided and it does not include 'year',
                // create a shallow copy and add year: 'numeric'. This avoids
                // mutating callers' format objects.
                if (format && typeof format === 'object' && format.year === undefined) {
                    const patched = Object.assign({}, format, { year: 'numeric' });
                    return orig.call(this, patched);
                }
            } catch (e) {
                // swallow and fallback to original behaviour
                console.error('web_datetime_patch: failed to enforce year in format', e);
            }
            return orig.call(this, format);
        };
        console.info('web_datetime_patch: DateTime.toLocaleString patched to include year');
    } catch (e) {
        console.error('web_datetime_patch: luxon DateTime not found, patch not applied', e);
    }
})();
