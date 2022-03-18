export interface Directory {
    directoryItems: DirectoryItem[];
}
export interface DirectoryItem {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size?: string;
}
