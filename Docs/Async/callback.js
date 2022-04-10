const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
  { title: "Post Three", body: "This is post three" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `${post.title}`;
    });
    console.log(output);
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = true;

      if (!error) {
        resolve();
      } else {
        reject("Error : Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post Four", body: "This is post four" })
//   .then(getPosts)
//   .catch((error) => console.log(error));

// Async / Await

// async function init() {
//     await createPost({ title: "Post Four", body: "This is post four" });

//     getPosts();
// }

// init();


// Async / Await / Fetch
async function fetchUsers() {
    const res = await fetch();
    const data = await res.json();
    
}



/// Promise.all

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Good")
// );

// Promise.all([promise1, promise2, promise3]).then((values) =>
//   console.log(values)
// );
