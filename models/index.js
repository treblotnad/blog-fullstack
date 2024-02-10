const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

User.hasMany(Post, {
  foreginKey: "user_id",
  onDelete: "NULL",
});

User.hasMany(Comment, {
  foreginKey: "user_id",
  onDelete: "NULL",
});

Post.hasMany(Comment, {
  foreginKey: "post_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreginKey: "user_id",
});

Comment.belongsTo(User, {
  foreginKey: "user_id",
});

Comment.belongsTo(Post, {
  foreginKey: "post_id",
});

module.exports = { User, Post, Comment };
