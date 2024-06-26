type initialStateProps = {
    alert: alert,
    loading: boolean,
    theme: 'light' | 'dark',
    auth: {
        data: user | null,
        status: boolean
    },
    posts: post[],
    similarPosts: post[],
    postDetails: post | null,
    pagination: {
        page: number,
        limit: number
    },
    createPostModal:boolean
}
type alert = {
    state: boolean,
    message?: string,
    type?: undefined | 'success' | 'warning' |'error' | 'success' | 'info'
}

type comment = {
    commenter: {
        id: string,
        avatarUrl: string,
        name: string,
        email: string
    },
    comment: string,
    date: Date,
    _id: string
}

type post = {
    _id: string,
    title: string,
    subtitle: string,
    authorId: string,
    authorName: string,
    imgUrl: string,
    description: string,
    category: string[],
    createdAt: string,
    updatedAt: string,
    __v: number,
    comments: comment[]
}

type user = {
    "profile": {
        "connect": string[]
    },
    "_id": string,
    "userName": string,
    "name": string,
    "email": string,
    "password": string,
    "isAdmin": boolean,
    "saved": post[],
    "createdAt": string,
    "updatedAt": string,
    "__v": number,
    "dark": boolean
}


export type { initialStateProps, post, user,alert,comment }