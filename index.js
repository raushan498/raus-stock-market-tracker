



export async function getStockPrice(input) {
    const apiKey = 'HDCK2PZYP9SE8XZ1'; // Replace 'YOUR_API_KEY' with your actual API key
    
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${input}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data['Global Quote']) {
                const stockPrice = data['Global Quote']['05. price'];
               console.log("$" +  stockPrice);
            } else {
                alert('Invalid stock symbol. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching stock price:', error);
            alert('An error occurred while fetching the stock price. Please try again later.');
        });
}

