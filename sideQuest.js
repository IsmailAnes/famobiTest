function accumulateMissionsByGame(missions) {
    const games = {};
  
    for (const missionId in missions) {
      const mission = missions[missionId];
      const gameId = mission.gameId;
  
      if (!games[gameId]) {
        games[gameId] = {
          fails: mission.fails,
          gameId: gameId,
          playTime: mission.playTime,
          wins: mission.wins,
        };
      } else {
        games[gameId].fails += mission.fails;
        games[gameId].playTime += mission.playTime;
        games[gameId].wins += mission.wins;
      }
    }
  
    const result = [];
  
    for (const gameId in games) {
      result.push(games[gameId]);
    }
  
    return result;
  }

  const missions = {
    "archery-mission-lvl": {
      fails: 9,
      gameId: "archery-world-tour",
      playTime: 5291.706,
      wins: 8,
    },
    "archery-world-mission-1": {
      fails: 9,
      gameId: "archery-world-tour",
      playTime: 981,
      wins: 6,
    },
    "bubble-woods-mission-1": {
      fails: 19,
      gameId: "bubble-woods",
      playTime: 1206,
      wins: 9,
    },
    "bubble-woods-mission-lvl": {
      fails: 1,
      gameId: "bubble-woods",
      playTime: 100,
      wins: 2,
    },
    "candy-bubble-mission-lvl": {
      fails: 6,
      gameId: "candy-bubble",
      playTime: 1558,
      wins: 6,
    },
  };
  
  const accumulatedMissions = accumulateMissionsByGame(missions);
  
  console.log(accumulatedMissions);