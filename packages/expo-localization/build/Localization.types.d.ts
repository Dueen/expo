export declare type Localization = {
    /**
     * Three-character ISO 4217 currency code. Returns `null` on web.
     *
     * @example `'USD'`, `'EUR'`, `'CNY'`, `null`
     */
    currency: string | null;
    /**
     * Decimal separator used for formatting numbers.
     *
     * @example `','`, `'.'`
     */
    decimalSeparator: string;
    /**
     * Digit grouping separator used when formatting numbers larger than 1000.
     *
     * @example `'.'`, `''`, `','`
     */
    digitGroupingSeparator: string;
    /**
     * A list of all the supported language ISO codes.
     */
    isoCurrencyCodes: string[];
    /**
     * Boolean value that indicates whether the system uses the metric system.
     * On Android and web, this is inferred from the current region.
     */
    isMetric: boolean;
    /**
     * Returns if the system's language is written from Right-to-Left.
     * This can be used to build features like [bidirectional icons](https://material.io/design/usability/bidirectionality.html).
     *
     * Returns `false` in Server Side Rendering (SSR) environments.
     */
    isRTL: boolean;
    /**
     * An [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag),
     * consisting of a two-character language code and optional script, region and variant codes.
     *
     * @example `'en'`, `'en-US'`, `'zh-Hans'`, `'zh-Hans-CN'`, `'en-emodeng'`
     */
    locale: string;
    /**
     * List of all the native languages provided by the user settings.
     * These are returned in the order the user defines in their device settings.
     *
     * @example `['en', 'en-US', 'zh-Hans', 'zh-Hans-CN', 'en-emodeng']`
     */
    locales: string[];
    /**
     * The region code for your device that comes from the Region setting under Language & Region on iOS.
     * This value is always available on iOS, but might return `null` on Android or web.
     *
     * @example `'US'`, `'NZ'`, `null`
     */
    region: string | null;
    /**
     * The current time zone in display format.
     * On Web time zone is calculated with Intl.DateTimeFormat().resolvedOptions().timeZone. For a
     * better estimation you could use the moment-timezone package but it will add significant bloat to
     * your website's bundle size.
     *
     * @example `'America/Los_Angeles'`
     */
    timezone: string;
    getPreferredLocales: () => PreferredLocale[];
    getPreferredCalendars: () => PreferredCalendar[];
};
export declare type PreferredLocale = {
    languageTag: string;
    languageCode: string;
    regionCode: string | null;
    currencyCode: string | null;
    currencySymbol: string | null;
    decimalSeparator: string | null;
    digitGroupingSeparator: string | null;
    textDirection: string | null;
    measurementSystem: string | null;
};
export declare type PreferredCalendar = {
    calendar: string | null;
    uses24hourClock: boolean | null;
    firstWeekday: number | null;
    timeZone: string | null;
};
//# sourceMappingURL=Localization.types.d.ts.map