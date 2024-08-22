const userService = (() => {
    const getUsersAndPosts = async (callback) => {
        const userResponse = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await userResponse.json();

        const postResponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await postResponse.json();

        if (callback) {
            callback(users.slice(0, 2), posts);
        }
    };

    return { getUsersAndPosts: getUsersAndPosts };
})();
