export function calculateInstallment(price) {
    let installment;
    
    if (price <= 100) {
        installment = 3;
    }
    else if (price <= 300) {
        installment = 6;
    }
    else {
        installment = 10;
    }
    const value = (price / installment).toFixed(2);

    return {
        installment, value
    };
};