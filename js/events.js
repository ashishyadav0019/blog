var viewTemplate = document.getElementById('viewTemplate');
var createNewBlog = document.getElementById('createNewBlog');
var newTemplate = document.getElementById('newTemplate');
var welcome = document.getElementById('welcome');
var saveNewbtn = document.getElementById('saveNewbtn');
var deleteAll = document.getElementById('deleteAll');

var count = 0;

// to view a a blog
function viewItem(obj) {
  viewTemplate.style.display = "block";
  welcome.style.display = "none";
  viewTemplate.innerHTML = "";
  newTemplate.style.display = "none";
  createNewBlog.style.display = "block";
  var blogDiv = document.createElement("div");
  var edit = document.createElement('button');
  var saveBtn = document.createElement('button');
  blogDiv.classList = "blogDiv";
  var headHolder = document.createElement("div");
  var blogId = document.createElement("div");
  var ct = document.createElement("div");
  headHolder.classList = "headHolder";
  blogId.innerText = "BLOG ID :" + obj.id;
  ct.innerText = new Date(obj.timestamp).toLocaleDateString();
  headHolder.append(blogId);
  headHolder.append(ct);
  var text = document.createElement("div");
  var textEdit = document.createElement("textArea");
  textEdit.style.display = "none";

  var title = document.createElement("h5");
  var titleEdit = document.createElement("input");
  titleEdit.style.display = "none";

  title.innerText = obj.title;
  title.id = "title_" + obj.id;
  text.innerText = obj.text;
  text.id = "text_" + obj.id;
  titleEdit.id = "titleEdit_" + obj.id;
  textEdit.id = "textEdit_" + obj.id;

  blogDiv.append(headHolder);
  blogDiv.append(title);
  blogDiv.append(titleEdit);
  blogDiv.append(text);
  blogDiv.append(textEdit);
  edit.id = "edit2_" + obj.id;
  edit.innerText = "EDIT";

  saveBtn.id = "save_" + obj.id;
  saveBtn.innerText = "SAVE";
  saveBtn.style.display = "none";
  edit.addEventListener("click", editItem.bind(this, obj));
  saveBtn.addEventListener("click", saveItem.bind(this, obj));
  blogDiv.append(edit);
  blogDiv.append(saveBtn);
  viewTemplate.append(blogDiv)


}

// to DELETE a a blog
function deleteItem(obj) {

  var id = blogItem.findIndex(function (item) {
    return item.id === obj.id
  });
  blogItem.splice(id, 1);
  populateBlogs();
  // TODO : API CALL for DELETE BY ID
}

// save a blog after EDIT
function saveItem(obj) {
  newTemplate.style.display = "none";
  var title = document.getElementById("title_" + obj.id);
  var text = document.getElementById("text_" + obj.id);
  var textEdit = document.getElementById("textEdit_" + obj.id);
  var titleEdit = document.getElementById("titleEdit_" + obj.id);
  var saveBtn = document.getElementById("save_" + obj.id);
  var edit = document.getElementById("edit2_" + obj.id);
  title.style.display = "block";
  text.style.display = "block";
  edit.style.display = "inline";
  textEdit.style.display = "none";
  titleEdit.style.display = "none";
  saveBtn.style.display = "none";
  title.innerText = titleEdit.value;
  text.innerText = textEdit.value;

  obj.title = titleEdit.value
  obj.text = textEdit.value;

  populateBlogs();
  // TODO : API CALL for SAVE
}
// EDIT a blog
function editItem(obj) {
  newTemplate.style.display = "none";
  var title = document.getElementById("title_" + obj.id);
  var text = document.getElementById("text_" + obj.id);
  var textEdit = document.getElementById("textEdit_" + obj.id);
  var titleEdit = document.getElementById("titleEdit_" + obj.id);
  var saveBtn = document.getElementById("save_" + obj.id);
  var edit = document.getElementById("edit2_" + obj.id);
  title.style.display = "none";
  text.style.display = "none";
  edit.style.display = "none";
  textEdit.style.display = "block";
  titleEdit.style.display = "block";
  saveBtn.style.display = "block";
  textEdit.value = obj.text;
  titleEdit.value = obj.title;
  // TODO : API CALL for EDIT
}


// create and save new block
createNewBlog.addEventListener("click", function () {
  newTemplate.style.display = "block";
  createNewBlog.style.display = "none";
  welcome.style.display = "none";
  viewTemplate.style.display = "none";
  document.getElementById('newBlogTitle').value = "";
  document.getElementById('newBlogText').value = ""

});

saveNewbtn.addEventListener("click", function () {
  count++;
  var outObj = {
    id: 101 + count,
    timestamp: new Date(),
    title: document.getElementById('newBlogTitle').value,
    text: document.getElementById('newBlogText').value
  };
  blogItem.push(outObj);
  populateBlogs();
  viewItem(outObj);
  createNewBlog.style.display = "block";
  // TODO : API CALL for Save New
});
// create and save new block


// delete All blogs
deleteAll.addEventListener("click", function () {
  blogItem.length = 0;
  populateBlogs();
// TODO : API CALL for delete ALL
})

//