const fetchUPIMerchantDetails = async (
  transactionRefId,
  upiId,
  bankCode,
  apiKey
) => {
  const apiUrl = `https://api.${bankCode}.com/upi/transaction-status` // Generic URL template

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`, // Use bank-specific API token
      },
      body: JSON.stringify({
        transactionRefId: transactionRefId, // Transaction Reference ID
        upiId: upiId, // Merchant UPI ID or VPA
      }),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }

    const data = await response.json()

    // Display Merchant Details
    console.log("Merchant Details:", {
      merchantName: data.merchant.name,
      merchantType: data.merchant.type,
      transactionStatus: data.status,
      amount: data.amount,
      timestamp: data.timestamp,
    })

    return data
  } catch (error) {
    console.error("Error fetching UPI merchant details:", error.message)
  }
}

// Example usage for any bank
fetchUPIMerchantDetails(
  "ICI69FFC488C1134F9DB09CD4ECA7E139A3",
  "merchant@upi",
  "axisbank",
  "YOUR_API_TOKEN"
)
