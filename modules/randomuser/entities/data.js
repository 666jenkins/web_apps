function fetchUsers(callback) {
    $.ajax({
        url: 'https://randomuser.me/api/?results=20',
        dataType: 'json',
        success: function (data) {
            callback(data.results);
        }
    });
}
export { fetchUsers };