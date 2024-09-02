function validateCustomer(customer) {
    const errors = [];

    // Validate name
    if (!customer.name || customer.name.trim().length === 0) {
        errors.push("Name is required.");
    }

    // Validate email
    if (!customer.email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(customer.email)) {
        errors.push("A valid email is required.");
    }

    // Validate phone number
    if (!customer.phone || !/^\d{10}$/.test(customer.phone)) {
        errors.push("A valid 10-digit phone number is required.");
    }

    // Validate address (optional)
    if (customer.address && customer.address.trim().length === 0) {
        errors.push("If provided, address cannot be empty.");
    }

    // Validate customer type (individual or corporate)
    if (!customer.type || (customer.type !== "individual" && customer.type !== "corporate")) {
        errors.push("Customer type must be either 'individual' or 'corporate'.");
    }

    // Return errors if any
    return errors.length > 0 ? errors : null;
}

// Example usage:
const customer = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    address: "123 Main St",
    type: "individual"
};

const validationErrors = validateCustomer(customer);

if (validationErrors) {
    console.log("Validation failed:", validationErrors);
} else {
    console.log("Customer data is valid.");
}
