var description = 'Welcome to C++ Forum, a website where anyone can ask, answer, and discuss any topic related to C++.';
var descriptionElement = document.getElementById('description');
descriptionElement.textContent = description;

var postAuthorElements = document.getElementsByClassName('post-author');
var daveE = postAuthorElements[0].textContent;
var mikeE = postAuthorElements[1].textContent;

for (var index = 0; index < postAuthorElements.length; index++)
{
    postAuthorElements[index].textContent = 'Posted by: ' + postAuthorElements[index].textContent;
}

var replyAuthorElements = document.getElementsByClassName('reply-author');

for (let index = 0; index < replyAuthorElements.length; index++)
{
    replyAuthorElements[index].textContent = 'Reply by: ' + replyAuthorElements[index].textContent;
}