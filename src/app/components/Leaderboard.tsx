// any further User data required should not use Prop drilling.

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

interface LeaderboardProps {
    users: User[];
}

export default function Leaderboard({users}: LeaderboardProps){
    const sortedUsers = [...users].sort((a, b) => (b.elo ?? 0) - (a.elo ?? 0));

    const calculateStreak = (user: User) => {
        let streak = 0;
        const placements = user.placements || [];
        for (let i = placements.length - 1; i >= 0; i--) {
            if (placements[i] <= 4 && streak === placements.length - 1 - i) {
                streak++;
            } else {
                break;
            }
        }
        return streak;
    };

    const avgPosition = (user: User) => {
        const placements = user.placements || [];
        if (!placements.length) return 0;
        return placements.reduce((sum, p) => sum + p, 0) / placements.length;
    };

    return (
    <div className="homescreen-leaderboard">
      <div className="racers">
        <div className="racers-header">
          <div className="racers-header__standing"></div>
          <h3 className="racers-header__alias">DRIVER</h3>
          <h3 className="racers-header__score">SCORE</h3>
          <h3 className="racers-header__elo">ELO RATING</h3>
          <h3 className="racers-header__wins">TOTAL WINS</h3>
          <h3 className="racers-header__competitions">COMPETITIONS</h3>
          <h3 className="racers-header__avg-pos">AVERAGE POSITION</h3>
        </div>

        {sortedUsers.map((user, index) => {
          const streak = calculateStreak(user);
          const avgPos = avgPosition(user);

          return (
            <a
              key={user._id}
              href={`/racer/${user.username}`}
              className="racer"
              data-id={user._id}
            >
              <div className="racers-row__standing">{index + 1}.</div>

              <div className="racers-row__alias">
                <img className="racers-row__img" src={user.profile_image} alt="" />
                {user.username}
                {streak >= 3 && (
                  <img
                    className="racers-row__rocket"
                    style={{ height: 20 }}
                    src="rocket-icon.png"
                  />
                )}
              </div>

              <div className="racers-row__score">{user.score}</div>
              <div className="racers-row__elo">{user.elo}</div>
              <div className="racers-row__wins">{user.wins}</div>
              <div className="racers-row__competitions">{user.competitions}</div>
              <div className="racers-row__avg-pos">
                <div className="racers-row__avg-pos-text">{avgPos.toFixed(1)}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}