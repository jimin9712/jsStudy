const userLayout = (() => {
    const showUsersAndPosts = (users, posts) => {
        const container = document.getElementById("user-container");
        let text = "";

        users.forEach((user) => {
            let userPosts = posts.filter((post) => post.userId === user.id);

            text += `
                <table class="users">
                    <tr>
                    <td class = "name">${user.name}</td>
                    <td class = "name">${user.username}</td>
                    </tr>
                    <table>      
            `;

            userPosts.slice(0, 3).forEach((post) => {
                text += `
                    <tr>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                    </tr>
                `;
            });

            text += `
                </table>          
                
            </table>
            `;
        });

        container.innerHTML = text;
    };

    return { showUsersAndPosts: showUsersAndPosts };
})();
