var blogs = [
  { post: "1.post", description: "Futbol" },
  { post: "2.post", description: "Siyaset" },
  { post: "3.post", description: "Basketbol" },
  { post: "4.post", description: "Sağlık" },
  { post: "5.post", description: "Teknoloji" },
];

function addNewBlog(blog, situation) {
  return new Promise((resolve, reject) => {
    console.log("Yeni bir Blog yazısı için post ekleniyor ....");
    setTimeout(() => {
      if (situation) {
        blogs.push(blog);
        resolve("Başarıyla post eklendi");
      } else {
        reject("Post eklenemeediiii !!! ");
      }
    }, 4000);
  });
}

function listBlogs() {
  console.log(" --- POST --- ", " --- DESCRIPTION ---- ");
  blogs.map((post) => {
    console.log(" - ", post.post, "  ---- ---- ", post.description);
  });
}

async function firstAddSecondList() {
  try {
    const result = await addNewBlog({ post: "6.post", description: "Ekonomii" }, false); // false & true yapınca kodun 2 senaryosunuda deneyin :)
    console.log(result);
    listBlogs();
  } catch (error) {
    console.log(error);
  }
}

firstAddSecondList();
