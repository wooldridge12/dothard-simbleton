import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".businessList--newYork")

export const NewYorkList = () => {
    const businesses = getBusinesses()
    const NYBusinesses = businesses.filter(business => business.addressStateCode === "NY")
    contentTarget.innerHTML = "<h1>New York Businesses</h1>"

    NYBusinesses.forEach(business => contentTarget.innerHTML += Business(business))
}