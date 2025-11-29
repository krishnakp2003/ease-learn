  const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const result = document.getElementById("result");
    let rates = {};

    // Fetch currency rates
    async function loadCurrencies() {
      let response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
      let data = await response.json();
      rates = data.rates;

      // Fill dropdowns
      for (let currency in rates) {
        let option1 = document.createElement("option");
        option1.value = currency;
        option1.text = currency;
        fromCurrency.appendChild(option1);

        let option2 = document.createElement("option");
        option2.value = currency;
        option2.text = currency;
        toCurrency.appendChild(option2);
      }

      fromCurrency.value = "USD";
      toCurrency.value = "INR";
    }

    // Convert currency
    function convert() {
      let amount = document.getElementById("amount").value;
      let from = fromCurrency.value;
      let to = toCurrency.value;

      if (amount === "") {
        result.innerText = "Please enter amount!";
        return;
      }

      let convertedAmount = (amount / rates[from]) * rates[to];
      result.innerText = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
    }

    loadCurrencies();