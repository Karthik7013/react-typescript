type initialStateProps = {
    alert: {
        state: false,
        message: '',
        type: 'success' | 'warning' | 'success' | 'info' | undefined
    },
    loading: boolean
    auth: {
        data: user | null,
        status: boolean
    },
    posts: post[],
    similarPosts: post[],
    postDetails: post | undefined,
    pagination: {
        page: number,
        limit: number
    }
}

type comment = {
    commenter: {
        id: string,
        avatarUrl: string,
        name: string,
        email: string
    },
    comment: string,
    date: string,
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


export type { initialStateProps, post }