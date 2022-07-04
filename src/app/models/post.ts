export class Post {
    title: string;
    excerpt: string;
    url: string;
    thumbnail_images? : {
        full?: {
            url: string;
        }
    };
}