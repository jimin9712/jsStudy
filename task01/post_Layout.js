const postLayout = (() => {
    const showPosts = (posts) => {
        const wrap = document.getElementById("post-wrap");
        let text = `
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
        `;
        posts.slice(0, 10).forEach((post) => {
            text += `
                <tr>
                    <td>${post.userId}</td>
                    <td class="title">${post.title}</td>
                    <td class="body">${post.body}</td>
                </tr>
            `;
        });
        text += `
                </tbody>
            </table>
        `;
        wrap.innerHTML = text;
    };

    return { showPosts: showPosts };
})();
