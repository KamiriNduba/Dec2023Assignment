// Object to store flavors and their prices
const flavorPrices = {
    'Watermelon Mint': 200, 
    'Passion Fruit': 200,
    'Pineapple': 200
  };
  
  document.getElementById('juiceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const allFlavors = document.querySelectorAll('input[name="flavor"]');
    const selectedFlavors = Array.from(document.querySelectorAll('input[name="flavor"]:checked')).map(flavor => flavor.value);
  
    if (selectedFlavors.length > 0) {
      let totalPrice = 0;
  
      selectedFlavors.forEach(flavor => {
        totalPrice += flavorPrices[flavor]; 
      });
  
      let orderMessage;
      if (selectedFlavors.length === 3) {
        orderMessage = `Your order for blended juice has been placed successfully. Pay ${totalPrice} shillings`;
      } else if (selectedFlavors.length === allFlavors.length) {
        orderMessage = `Your order for all available flavors has been placed successfully. Pay ${totalPrice} shillings`;
      } else {
        orderMessage = `Your order for ${selectedFlavors.join(', ')} has been placed successfully. Pay ${totalPrice} shillings`;
      }
  
      displayOrderStatus(orderMessage);
    } else {
      displayOrderStatus(`Please select at least one flavor.`);
    }
  });
  
  function displayOrderStatus(message) {
    const orderStatus = document.querySelector('.order-status');
    orderStatus.style.display = 'block';
    orderStatus.textContent = message;
  }
  