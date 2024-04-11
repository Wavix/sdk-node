import { wavix } from "./wavix"

// npx ts-node-dev --transpile-only examples/cart.ts

const main = async () => {
  // Get cart content
  const getCartContentResponse = await wavix.cart.getCartContent()

  console.log("Get cart content response", getCartContentResponse)

  // Add did numbers to cart
  const addDidNumbersToCartResponse = await wavix.cart.addDidNumbersToCart({ ids: [""] })

  console.log("Add did numbers to cart response", addDidNumbersToCartResponse)

  // Checkout did numbers
  const callCheckoutDidNumbersResponse = async () => {
    const res = await wavix.cart.checkoutDidNumbers({ ids: [""] })

    console.log("Checkout did numbers response", res)
  }

  process.exit()
}

main()
