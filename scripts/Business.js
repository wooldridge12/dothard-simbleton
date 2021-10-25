export const Business = (business) => {
    return `
    <section class="business">
    <h2 class="business__company_name">${business.companyName}</h2>
    <div class="business__company_info">${business.addressFullStreet} <br> ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</div>
    </section>`
}

