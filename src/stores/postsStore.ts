import create from "zustand";

type Post = {
  id: number;
  author_id: number;
  first_name: string;
  last_name: string;
  avatar_path: string;
  title: string;
  body: string;
  created_at: string;
  like_count: number;
};

type PostsState = {
  posts: Post[];
  addPost: (post: Post) => void;
  fetchPosts: () => Promise<void>;
};

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  addPost: (post: Post) => set((state) => ({ posts: [...state.posts, post] })),
  fetchPosts: async () => {
    const response = await fetch("http://localhost:7777/api/posts/posts");
    const posts = await response.json();
    set({ posts });
  },
}));
