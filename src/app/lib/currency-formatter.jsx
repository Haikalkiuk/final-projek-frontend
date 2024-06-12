import React from "react";

const CurrencyFormatter = ({ value, currency = "IDR", locale = "id-ID" }) => {
    return (
        new Intl.NumberFormat(locale, {
            style: "currency",
            currency,
        }).format(value)
    );
};

export default CurrencyFormatter;
