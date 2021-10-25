import { BusinessList } from "./BusinessList.js"
import { getBusinesses } from "./database.js"


const businessList = getBusinesses()

BusinessList()