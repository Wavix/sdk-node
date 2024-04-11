import ServiceBase from "../service.base"
import { AddDidNumbersToCartPayload, AddDidNumbersToCartResponse, CheckoutPayload, CheckoutResponse, GetCartContentResponse } from "./cart.interface"

class Cart extends ServiceBase {
  public getCartContent() {
    return this.http.get<GetCartContentResponse>("/v1/buy/cart")
  }

  public addDidNumbersToCart(payload: AddDidNumbersToCartPayload) {
    return this.http.put<AddDidNumbersToCartResponse, AddDidNumbersToCartPayload>("/v1/buy/cart", payload)
  }

  public checkoutDidNumbers(payload: CheckoutPayload) {
    return this.http.post<CheckoutResponse, CheckoutPayload>("/v1/buy/cart/checkout", payload)
  }
}

export { Cart }
