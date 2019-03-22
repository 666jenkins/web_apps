
function fetchUsers(callBack) {
    $.ajax({
        url: 'https://randomuser.me/api/?results=20',
        dataType: 'json',
        success: function (data) {
            callBack(data.results);
        }
    });
}
export { fetchUsers };
