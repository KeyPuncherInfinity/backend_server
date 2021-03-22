
const client = require('./src/connection')

const _test_connection = require('./src/test')
const _create_user = require('./src/create-user')
const _authenticate_user = require('./src/authenticate-user')
const _login_user = require('./src/login-user')
const _connect_user = require('./src/connect-user')
const _logout_user = require('./src/logout-user')

const _get_name_from_email = require('./src/get-name-from-email')
const _get_name_from_cookie = require('./src/get-name-from-cookie')
const _get_email_from_cookie = require('./src/get-email-from-cookie')
const _get_email_from_sockid = require('./src/get-email-from-sockid')
const _get_pid_from_email = require('./src/get-pid-from-email')
const _get_sockid = require('./src/get-sockid')

const _add_friend = require('./src/add-friend')
const _friend_list = require('./src/friend-list')
const _accept_request = require('./src/accept-request')
const _decline_request = require('./src/decline-request')
const _check_friend_status = require('./src/check-friend-status')

const db = {
    // properties
    client: client, 

    // methods
    test_connection: _test_connection,
    
    create_user: _create_user, // when new user account is created
    authenticate_user: _authenticate_user, // check if email and password are valid
    login_user: _login_user, // create a user session
    connect_user: _connect_user, // storing socket id when a new user connects
    logout_user: _logout_user, // clears user data from session
    
    get_name_from_email: _get_name_from_email,
    get_name_from_cookie: _get_name_from_cookie,
    get_email_from_cookie: _get_email_from_cookie,
    get_email_from_sockid: _get_email_from_sockid,
    get_pid_from_email: _get_pid_from_email,
    get_sockid: _get_sockid, // grabs the sock id from email if available


    add_friend: _add_friend,
    friend_list: _friend_list,
    accept_request: _accept_request,
    decline_request: _decline_request,
    check_friend_status: _check_friend_status

}

module.exports = db
