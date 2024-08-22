const button = document.getElementById("get-users");

button.addEventListener("click", () => {
    userService.getUsersAndPosts(userLayout.showUsersAndPosts);
});
