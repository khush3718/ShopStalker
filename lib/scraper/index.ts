"use server"

import axios from 'axios'
import * as cheerio from 'cheerio'

export async function scrapeProduct(productURL: string) {

    if (!productURL) {
        return
    }

    // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_be4f376f-zone-unblocker:rrmn86dh83k1 -k https://lumtest.com/myip.json

    // Bright data proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)
    const port = 22225
    const session_id = (Math.random() * 10000) | 0;

    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    };

    try {
        // fetch the product page
        const response = await axios.get(productURL, options)
    } catch (error: any) {
        throw new Error(`Error scraping product: ${error.message}`)
    }



}