 let userId = localStorage.getItem('userId') || "guest";
            let userBalanceKey = `balance_${userId}`;
            let balance = parseInt(localStorage.getItem(userBalanceKey)) || 0;
            
function completeTask(reward, taskUrl) {
   
    if (localStorage.getItem(taskUrl) === 'true') {
        alert('You have already completed this task.');
        return;
    }

 
    balance += reward;
    updateBalance();

 
    localStorage.setItem(taskUrl, 'true');

 
    localStorage.setItem('balance', balance);


    window.open(taskUrl, '_blank');
}

function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

updateBalance();
