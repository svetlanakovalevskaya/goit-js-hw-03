/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],

    transactionCounter: 0,
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        const transaction = {
           id: this.transactionCounter,
           amount,
           type,
        };
        
        return transaction;
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму транзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;
        this.transactionCounter += 1;
        const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(newTransaction);
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (amount > this.balance) {
            return 'На балансе недостаточно средств для снятия!';
        }

        this.balance -= amount;
        this.transactionCounter += 1;
        const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(newTransaction);
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return transaction;
            }
        }

        return 'По такому id транзакция не найдена.';
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let transactionTotal = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                transactionTotal += transaction.amount;
            }
        }

        return transactionTotal;
    },
  };


  console.log(account);
  console.log(account.deposit(1000));
  console.log(account);
  console.log(account.transactions);
  console.log(account.withdraw(10000));
  console.log(account.withdraw(500));
  console.log(account.getBalance());
  console.log(account.deposit(3000));
  console.log(account.withdraw(1000));
  console.log(account.getTransactionTotal('deposit'));
  console.log(account.getTransactionTotal('withdraw'));
  console.log(account.getTransactionDetails(1));
  console.log(account.getTransactionDetails(66));