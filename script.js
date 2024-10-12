
const branches = [
    { name: 'CSE', wins: 0 },
    { name: 'AIML', wins: 0 },
    { name: 'CSDS', wins: 0 },
    { name: 'CSBS', wins: 0 },
    { name: 'IS', wins: 0 },
    { name: 'Mechanical', wins: 0 },
    { name: 'Civil', wins: 0 },
    { name: 'Chemical', wins: 0 },
    { name: 'Textile', wins: 0 }
];

// ***********************************
function getEmoji(rank) {
    switch (rank) {
        // case 1: return '🥇'; // Gold
        // case 2: return '🥈'; // Silver
        // case 3: return '🥉'; // Bronze
        default: return ''; // No emoji for other ranks
    }
}
//                       make this script uncomment on the eventday
// ***********************************

branches.sort((a, b) => b.wins - a.wins);

const leaderboardBody = document.getElementById('leaderboard-body');

branches.forEach((branch, index) => {
    const row = document.createElement('tr');
    const emoji = getEmoji(index + 1); 
    const branchCell = document.createElement('td');
    branchCell.textContent = `${branch.name} ${emoji}`;
    
    const winsCell = document.createElement('td');
    winsCell.textContent = branch.wins;

    row.appendChild(branchCell);
    row.appendChild(winsCell);
    leaderboardBody.appendChild(row);
});
