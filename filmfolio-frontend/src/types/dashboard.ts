export interface DashboardStats {
    totalPosts: number;
    totalLikes: number;
    followers: number;
}

export interface RecentPost {
    id: number;
    title: string;
    createdAt: string;
    thumbnail?: string;
}

export interface UserProfile {
    id: number;
    name: string;
    avatar: string;
}
