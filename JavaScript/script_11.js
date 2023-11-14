document.addEventListener('DOMContentLoaded', function () {

    //Realization with Promises
    fetch('https://jsonplaceholder.typicode.com/users/3')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((userData) => {
            let userid = userData.id;
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((postData) => {
            let postid = postData[0].id;
            return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((comments) => {
            console.log(comments);
        })
        .catch((error) => {
            console.log('There was a problem with the fetch operation:', error.message)
        })

    //Realization with Async / Await
    const getComments = async () => {

        try {
            let userResponse = await fetch('https://jsonplaceholder.typicode.com/users/3');
            let user = await userResponse.json();

            let postsResponse = await
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            let posts = await postsResponse.json();

            let firstPost = posts[0].id;

            let commentsResponse = await
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${firstPost}`);
            let comments = await commentsResponse.json();

            console.log(comments);
        } catch (error) {
            console.log('There was a problem with the fetch operation:', error.message)
        }
    };
    getComments();

});
