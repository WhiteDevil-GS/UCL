
const branches = [
    { name: 'CSE', wins: 3 },
    { name: 'AIML', wins: 0 },
    { name: 'CSDS', wins: 0 },
    { name: 'CSBS', wins: 0 },
    { name: 'IS', wins: 0 },
    { name: 'Mechanical', wins: 0 },
    { name: 'Civil', wins: 0 },
    { name: 'Chemical', wins: 0 },
    { name: 'Textile', wins: 0 },
    { name: 'EC', wins: 0 },
    { name: 'EEE', wins: 0 },
    { name: 'CS Design', wins: 0 },
    { name: 'Bio Technology', wins: 0 },
];

// ***********************************
function getEmoji(rank) {
    switch (rank) {
        case 1: return '🥇';
        // case 2: return '🥈'; 
        // case 3: return '🥉'; 
        default: return ''; 
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
