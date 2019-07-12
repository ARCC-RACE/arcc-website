export interface Post {
  title: string;
  content: string;
  author: string;
  tags: string[];
  date: string;
  comments: Array<Comment>;
}

export interface Comment {
  author: string;
  comment: string;
  date: string;
  profilePhoto: string;
}
