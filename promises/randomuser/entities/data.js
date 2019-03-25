function fetchUsers() {
    const getUsers = fetch('https://randomuser.me/api/?results=20')
        .then((response) => {
            return response.json()
        })
        .then((users) => {
            return users.results
        })
    return getUsers;
}

// function fetchUsers(callback) {
//     $.ajax({
//         url: 'https://randomuser.me/api/?results=20',
//         dataType: 'json',
//         success: function (data) {
//             callback(data.results);
//         }
//     });
// }

export { fetchUsers };