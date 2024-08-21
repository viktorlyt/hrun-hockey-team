import React, { useState } from "react";
import FormRow from "./FormRow";

const canadianProvinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Northwest Territories",
  "Nunavut",
  "Yukon",
];

const countries = [
  { value: "Canada", label: "Canada" },
  { value: "United States", label: "United States" },
];

const AddressForm = ({ address, onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState(address.country || "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...address, [name]: value });
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    onChange({ ...address, country });
  };

  return (
    <div className="address-form">
      <FormRow
        type="select"
        name="country"
        labelText="Country"
        value={selectedCountry}
        onChange={handleCountryChange}
        options={countries}
        isPlaceholder={true}
        placeholder="Country/Region"
      />
      <div class="form-row-inline">
        <FormRow
          type="text"
          name="streetAddress"
          placeholder="Street Address"
          value={address.streetAddress}
          onChange={handleChange}
        />
        <FormRow
          type="text"
          name="apt"
          placeholder="Apartment, suite, etc. (optional)"
          value={address.apt}
          onChange={handleChange}
          isRequired={false}
        />
      </div>
      <div class="form-row-inline">
        <FormRow
          type="text"
          name="city"
          labelText="City"
          value={address.city}
          onChange={handleChange}
        />
        <FormRow
          type="select"
          name="province"
          labelText="Province"
          value={address.province || "New Brunswick"}
          onChange={handleChange}
          options={canadianProvinces.map((province) => ({
            value: province,
            label: province,
          }))}
        />
        <FormRow
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={address.postalCode}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AddressForm;
