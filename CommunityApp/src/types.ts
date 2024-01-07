type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export type Album = {
    userId: number;
    id: number;
    title: string;
}

export type ToDoTaskType = {
    userId: string;
    id: number;
    title: string;
    completed: boolean;
}

export type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
  
export type CommentListProps = {
    postId: number;
}

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}