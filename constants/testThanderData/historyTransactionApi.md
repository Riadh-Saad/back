
/* add new selling transaction */

    axios.post('http://localhost:3000/api/history/addNewTransaction',
    {
        "userId": 1,
        "clientId": 1,
        "transactionDate": "2022-07-22",
        "transactionTime": "14:26:00",
        "transactionAmount": 650.5,
        "transactionDescription": "avance",
        "transactionType": "selling",
        "productId": 1
    })

/* add new buying transaction */

    axios.post('http://localhost:3000/api/history/addNewTransaction',
    {
        "userId": 1,
        "providerId": 1,
        "productId": 2,
        "transactionDate": "2022-07-22",
        "transactionTime": "14:26:00",
        "transactionAmount": 650.5,
        "transactionDescription": "avance",
        "transactionType": "buying"
    })

/* add new salary transaction */

    axios.post('http://localhost:3000/api/history/addNewTransaction',
    {
        "userId": 1,
        "employeeId": 1,
        "transactionDate": "2022-07-22",
        "transactionTime": "14:26:00",
        "transactionAmount": 650.5,
        "transactionDescription": "avance",
        "transactionType": "salary"
    })

/* select All Transactions By UserId params=>userId*/

    axios.post(`http://localhost:3000/api/history/selectAllTransactionsByUserId/:userId`,
    {
        "year": "2022",
        "month": "7",
        "day": 22
    })

/*select Transactions By UserId And ClientId params=>userId/clientId*/

    axios.post(`http://localhost:3000/api/history/selectTransactionsByUserIdAndClientId/:userId/:clientId`,
    {
        "year": "2022",
        "month": "7",
        "day": 22
    })

/* select Transactions By UserId And EmployeeId params=>userId/employeeId */

    //axios.post(`http://localhost:3000/api/history/selectTransactionsByUserIdAndEmployeeId/:userId/:employeeId`,
    {
        "year": "2022",
        "month": 7,
        "day": 22
    })
/* select Transactions By UserId And ProviderId params=>userId/providerId */

    axios.post(`http://localhost:3000/api/history/selectTransactionsByUserIdAndProviderId/:userId/:providerId`,
    {
        "year": "2022",
        "month": 7,
        "day": 22
    })

/* select Transactions By UserId And ProductId params=>userId/productId */

    axios.post(`http://localhost:3000/api/history/selectTransactionsByUserIdAndProductId/:userId/:productId`,
    {
        "year": "2022",
        "month": 7,
        "day": 22
    })
