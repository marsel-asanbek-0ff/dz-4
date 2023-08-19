let btnCreate = document.querySelector('.btn-create')

btnCreate.addEventListener('click', () => {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    
    var data = {
        firstname: firstName,
        lastname: lastName
    };
    
    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Произошла ошибка при создании данных');
        }
    })
    .then(data => {
        alert('Вы успешно создали данные');
        console.log(data); // Печатаем данные, полученные от сервера
    })
    .catch(err => {
        alert('Проблема создания карточки: ' + err);
    });
});
