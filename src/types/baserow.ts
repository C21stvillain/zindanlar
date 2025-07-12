export interface BaserowMonster {
    id: number;
    order: string;
    Name: string;
    Cover: Cover[];
    Title: string;
    cr: string;
    URL: string;
}

export interface Cover {
    url: string;
    thumbnails: Thumbnails;
    visible_name: string;
    name: string;
    size: number;
    mime_type: string;
    is_image: boolean;
    image_width: number;
    image_height: number;
    uploaded_at: string;
}

export interface Thumbnails {
    tiny: Thumbnail;
    small: Thumbnail;
    card_cover: Thumbnail;
}

export interface Thumbnail {
    url: string;
    width: number | null;
    height: number | null;
}