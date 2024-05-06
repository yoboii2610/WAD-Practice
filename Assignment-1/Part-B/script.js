$(document).ready(function() {
    // Registration Form Submission
    $('#registrationForm').submit(function(event) {
        event.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();

        const userData = {
            name: name,
            email: email,
            phone: phone
        };

        // Store data in local storage
        let registeredUsers = localStorage.getItem('registeredUsers');
        registeredUsers = registeredUsers ? JSON.parse(registeredUsers) : [];
        registeredUsers.push(userData);
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        alert('Registration successful!');
        window.location.href = 'data.html'; // Redirect to data listing page
    });

    // Display Registered Users
    function displayUserList() {
        const userList = localStorage.getItem('registeredUsers');
        const usersArray = userList ? JSON.parse(userList) : [];

        let listHTML = '<table><tr><th>Name</th><th>Email</th><th>Phone</th></tr>';
        usersArray.forEach(user => {
            listHTML += `<tr><td>${user.name}</td><td>${user.email}</td><td>${user.phone}</td></tr>`;
        });
        listHTML += '</table>';

        $('#userList').html(listHTML);
    }

    displayUserList();
}); 