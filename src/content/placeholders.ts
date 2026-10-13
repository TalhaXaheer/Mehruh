/**
 * MEHRUH Brand & Operational Placeholders
 *
 * Source of truth: docs/DESIGN_SYSTEM.md, docs/SCOPE.md (Decisions D-01, D-02)
 * All facts in this file are placeholders awaiting official client confirmation.
 * Flags: // TODO(client): confirm
 */

export interface CurrencyConfig {
  code: string;
  symbol: string;
  locale: string;
  fractionDigits: number;
  symbolPosition: "prefix" | "suffix";
  space: boolean;
}

// TODO(client): confirm currency preferences and formatting (defaulting to PKR per Decision D-01)
export const CURRENCY_CONFIG: CurrencyConfig = {
  code: "PKR",
  symbol: "Rs.",
  locale: "en-PK",
  fractionDigits: 0,
  symbolPosition: "prefix",
  space: true,
};

export interface BoutiqueLocation {
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  appointmentOnly?: boolean;
}

// TODO(client): confirm Pakistan atelier & salon locations and operating hours (Decision D-02)
export const BOUTIQUE_LOCATIONS: BoutiqueLocation[] = [
  {
    city: "Lahore",
    name: "The Lahore Atelier",
    address: "Gulberg III, Lahore, Pakistan", // TODO(client): confirm
    phone: "+92 42 111 634 784", // TODO(client): confirm
    hours: "Mon – Sat: 11:00 – 20:00", // TODO(client): confirm
    appointmentOnly: false,
  },
  {
    city: "Karachi",
    name: "The Clifton Salon",
    address: "Clifton Block 4, Karachi, Pakistan", // TODO(client): confirm
    phone: "+92 21 111 634 784", // TODO(client): confirm
    hours: "Mon – Sat: 11:00 – 20:00", // TODO(client): confirm
    appointmentOnly: true,
  },
  {
    city: "Islamabad",
    name: "The Capital Suite",
    address: "Sector F-6, Islamabad, Pakistan", // TODO(client): confirm
    phone: "+92 51 111 634 784", // TODO(client): confirm
    hours: "Mon – Sat: 11:00 – 20:00", // TODO(client): confirm
    appointmentOnly: true,
  },
];

// TODO(client): confirm customer service contacts and concierge channels
export const CONTACT_PLACEHOLDERS = {
  conciergeEmail: "concierge@mehruh.com", // TODO(client): confirm
  clientCarePhone: "+92 42 111 634 784", // TODO(client): confirm
  pressEmail: "press@mehruh.com", // TODO(client): confirm
  whatsapp: "+92 300 000 0000", // TODO(client): confirm
};

// TODO(client): confirm shipping terms, fulfillment windows, and return policy
export const SHIPPING_PLACEHOLDERS = {
  domesticDeliveryWindow: "2–4 business days across Pakistan", // TODO(client): confirm
  domesticCourier: "Express Insured Courier", // TODO(client): confirm
  complimentaryThreshold: 25000, // PKR // TODO(client): confirm
  returnPolicyDays: 14, // TODO(client): confirm
};
