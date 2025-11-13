var posts=["2025/11/12/hello-world/","2025/11/13/learn/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };