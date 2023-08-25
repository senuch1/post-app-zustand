import { create } from "zustand"

export const usePosts = create((set) =>(
    {
        posts:[{
            postId:1,
            creatorId:1,
            postText: 'text 1',
            authorName: 'Author',
            publishTime: new Date().getUTCDate()
        }],
        push: (posts,creatorId,postText,authorName)=>set(
            state => ({
                posts: [...state.posts,{
                    postId:state.posts[posts.length - 1].postId + 1,
                    creatorId:creatorId,
                    postText: postText,
                    authorName: authorName,
                    publishTime: new Date().getUTCDate()
                }]
            })),
            deletePost: (postId) => set(state => ({})),
            editPost: () => set(state => ({}))
        })
)