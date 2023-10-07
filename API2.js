document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');

    // Fetch data from the provided API
    fetch('https://randomuser.me/api/?results=10')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const users = data.results;
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name.first} ${user.name.last}`;
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching data:', error.message));
});