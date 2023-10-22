"use server"

import { scrapeProduct } from "../scraper"

export async function scrapeAndStoreProduct(productURL: string) {
  if(!productURL) {
    return
  }

  try {
    
    const scrapedProduct = await scrapeProduct(productURL)

  } catch (error: any) {
    throw new Error(`Error scraping product: ${error.message}`)
  }


}