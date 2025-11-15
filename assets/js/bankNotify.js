// INFINITY BANK PUSH NOTIFICATION SYSTEM

function showBankNotification(amountRub, message = "Успешная покупка ✔") {
    const currency = localStorage.getItem("currency") || "₽";
    const rates = { "₽":1, "₸":6.5, "$":0.012, "€":0.011 };

    const balance = parseFloat(localStorage.getItem("balance_rub") || 0);
    const newBalance = balance * rates[currency];

    const formattedAmount = (amountRub * rates[currency]).toLocaleString("ru-RU");
    const formattedBalance = newBalance.toLocaleString("ru-RU");

    // Если уведомление уже есть — перезапускаем анимацию
    let notif = document.getElementById("bankNotification");
    if (!notif) {
        notif = document.createElement("div");
        notif.id = "bankNotification";
        notif.style = `
            position: fixed;
            top: -120px;
            left: 50%;
            transform: translateX(-50%);
            background: #ffffff;
            color: #111;
            padding: 16px 24px;
            border-radius: 22px;
            font-family: Inter, sans-serif;
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
            text-align: left;
            box-shadow: 0 12px 35px rgba(0,0,0,0.25);
            transition: 0.45s;
            z-index: 99999;
            min-width: 260px;
            pointer-events: none;
        `;
        document.body.appendChild(notif);
    }

    notif.innerHTML = `
        INFINITY BANK<br>
        ${amountRub < 0 ? "" : "+"}${formattedAmount} ${currency}<br>
        Доступно: ${formattedBalance} ${currency}<br>
        ${message}
    `;

    // Выезд вниз
    setTimeout(() => { notif.style.top = "20px"; }, 10);

    // Через 3 сек уезжает назад вверх
    setTimeout(() => { notif.style.top = "-140px"; }, 3000);
}