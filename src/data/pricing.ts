import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 5,
        period: "month",
        features: [
            "50 AI Thumbnails Every Month",
            "Basic Templates",
            "Standard Resolution",
            "No Watermark",
            "Email Support"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 29,
        period: "month",
        features: [
            "Unlimited Ai Thumbnails",
            "premium Templates",
            "4K Resolution",
            "A/B Testing Tools",
            "Priority Support",
            "Custom Fonts",
            "Brand Kit Analysis"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 99,
        period: "month",
        features: [
            "Everything in Pro",
            "API Access",
            "Team Collabration",
            "Custom Branding",
            "Dedicated Account Manager"
        ],
        mostPopular: false
    }
];