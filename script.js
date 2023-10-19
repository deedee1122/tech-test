document.addEventListener('DOMContentLoaded', function () {
  //fetching the data from the API
  fetch(
    'https://my-json-server.typicode.com/telegraph/frontend-exercise/comments'
  )
    .then((response) => response.json())
    .then((data) => {
      const commentsSection = document.querySelector('.comments-section') //selecting the comments section

      data.sort((a, b) => a.likes - b.likes) //sorting the data by likes

      data.forEach((comment) => {
        const commentDiv = document.createElement('div') //creating a div for each comment
        commentDiv.className = 'comment' //adding a class to the div
        commentDiv.innerHTML = `
                    <div class="comment__header">
                        <div class="comment__header__left">
                            ${comment.name} 
                        </div>
                        <div class="comment__header__right">
                            <span>${comment.likes} Likes</span>
                        </div>
                    </div>

                    <p class="comment__body">
                        ${comment.body}
                    </p>
                ` //adding the content to the div
        commentsSection.appendChild(commentDiv) //adding the div to the comments section
      })
    })
})
