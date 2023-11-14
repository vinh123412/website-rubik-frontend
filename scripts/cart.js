export const cart = [];

export function addToCart(productName){
  let matchItem;

    cart.forEach((cartItem) => {
      if(cartItem.productName === productName){
        matchItem=cartItem;
      }
    });

    if(matchItem){
      matchItem.quantity+=1;
    }else{
      cart.push({
        productName: productName,
        quantity: 1
      });
    }
}