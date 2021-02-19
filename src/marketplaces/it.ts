import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { europeanAdvertisingFactory } from '../european-advertising-factory'
import { sellerCentralUrls, sellingPartnerRegions } from '../selling-partner-api-regions'

export const IT = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.IT,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'APJ6JRA9NG5V4',
  name: 'Italy',
  uri: 'https://www.amazon.it',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: europeanAdvertisingFactory(AmazonMarketplaceAdvertisingCountryCode.DE),
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralUrl: sellerCentralUrls.EU,
  },
})
