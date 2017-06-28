export const createComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: "/api/comments",
    data: { comment }
  });
};

export const updateComment = (comment, id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/comments/${id}`,
    data: { comment }
  });
};

export const removeComment = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`,
  });
};

export const fetchSingleComment = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/comments/${id}`,
  });
};

 // addLike() {
 //   this.props.updateComment({ likes_attributes: {likeable_id: this.props.comment.id, likeable_type: "Comment"}})
 // }
