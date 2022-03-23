class Post {
	constructor(id, postTitle, postContent, postImage, userId) {
		this.id = id;
		this.postTitle = postTitle;
		this.postContent = this.postContent;
		this.postImage = postImage;
		this.userId = userId;
	}
}

exports.module = Post;

class Comment {
	constructor(id, content, dateCreate, userId, postId) {
		this.id = id;
		this.content = content;
		this.dateCreate = this.dateCreate;
		this.userId = userId;
		this.postId = postId;
	}
}

exports.module = Comment;
