export interface CountryFormatter {
    leadingDigitsPattern: string;
    formatter: string | string[];
}

export interface CountryFormat {
    country: string;
    countryCode: string;
    iddPrefix?: string;
    nddPrefix?: string;
    formatters: CountryFormatter[];
}

export interface PhoneFormats {
    [key: string]: CountryFormat 
}

export interface PhonePattern {
    national: string;
}

export interface PhonePatterns {
    [key: string]: PhonePattern 
}

export interface PhoneExample {
    fixed: string;
    mobile: string;
    tollfree: string;
}

export interface PhoneExamples {
    [key: string]: PhoneExample 
}

export function getFormats(country: string): CountryFormat;

export function phoneFormatter(value: string, country: string): [string];

// export function format(value: any, frmtr: any): any;

export function formatPhone(value: string, country: string): string;

export function getPatterns(country: string): PhonePattern;

export function validatePhone(value: string, country: string): boolean;

export function getCountryCode(country: string): string;

export function getExample(country: string, type: string): string;

export function getSupportedCountries(): Array<string>;

