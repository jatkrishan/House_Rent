exports.userResponse = (users) => {
    let usersResult = []
    users.forEach(user => {
        usersResult.push({
            name: user.name,
            username: user.username,
            email: user.email,
            role: user.role,
        })
    });

    return usersResult;
}