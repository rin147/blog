function start() {
  var titleImg = document.getElementById('titleImg');
  var blog = document.getElementById("blog");
  var blogBox = document.getElementById("blogBox");
  blog.style.height = titleImg.clientHeight + "px";
  blogBox.style.height = titleImg.clientHeight + "px";
  $.getJSON("./blog/list.json", (data) => {
    console.log(data[0]);
    var a = blog;
    a.id = "blog0";
    a.children.item(0).src = "./blog/"+data[0]+"/thu.jpg";
    a.id = "blog" + 0;
    a.addEventListener("click",
    function(){
      window.open("./blog/" + data[i]);
    }, false);
    a.children.item(0).id = "titleImg"+0;
    a.children.item(1).id = "blogBox"+0;
    a.style.height = a.children.item(0).style.height = a.children.item(1).style.height = "269px";
    beforeElement = a;
    var page = document.documentElement.clientHeight - a.getBoundingClientRect().top - a.clientHeight;
    console.log((page - (page % 269))/269);
    var copyBlog = blog.cloneNode(true);
    console.log(screen.height/312);
    for (var i = 1; i < ((page - (page % 269))/269) + 2; i++) {
      var a = copyBlog.cloneNode(true);
      a.children.item(0).src = "./blog/"+data[i]+"/thu.jpg";
      a.id = "blog" + i;
      a.addEventListener("click",
      function(){
        window.open("./blog/" + data[i]);
      }, false);
      a.children.item(0).id = "titleImg"+i;
      a.children.item(1).id = "blogBox"+i;
      beforeElement.after(a);
      a.style.height = a.children.item(0).style.height = a.children.item(1).style.height = "269px";
      console.log(a.children.item(0).clientHeight + "px");
      beforeElement = document.getElementById("blog"+i);
      console.log(beforeElement);

      num += 1;
      data[i]
    }
  });
}
window.addEventListener('DOMContentLoaded', function(){

			window.addEventListener('scroll', function(){
				var sc = window.pageYOffset + document.documentElement.clientHeight;
        if(document.documentElement.offsetHeight - (document.documentElement.clientHeight + window.pageYOffset) < 269 * 2){
          $.getJSON("./blog/list.json", (data) => {
            if(num <= data.length){
              var copyBlog = document.getElementById("blog"+ (num - 2));
              var a = copyBlog.cloneNode(true);
              a.children.item(0).src = "./blog/"+data[num - 1]+"/thu.jpg";
              a.id = "blog" + (num - 1);
              a.addEventListener("click",
              function(){
                window.open("./blog/" + data[i]);
              }, false);

              a.children.item(0).id = "titleImg"+ (num - 1);
              a.children.item(1).id = "blogBox"+ (num - 1);
              a.style.height = a.children.item(0).style.height = a.children.item(1).style.height = "269px";
              copyBlog.after(a);
              beforeElement = document.getElementById("blog"+(num - 1));
              num += 1;
            }
        });
        }
			});
});
var num = 2;
window.onload = start()
