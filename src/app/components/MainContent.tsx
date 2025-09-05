import Leaderboard from "./Leaderboard";

type User = {
    _id: string; 
    first_name?: string;
    last_name?: string;
    username?: string; 
    email?: string;
    phone_number?: string;
    profile_image?: string;
    background_image?: string;
    wins?: number;
    elo: number;
    score?: number;
    competitions?: number;
    placements?: number[];
}

interface MainContentProps {
    users: User[];
}
export default function MainContent({ users }: MainContentProps) {
    return (
        <> 
            < Leaderboard users={users} /> 
        </>
    )
}