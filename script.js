const branches = [
    {
        name: "CSE",
        games: [
            { game: "100m (Girls)", winners: ["Prerana"], runners: [] },
            { game: "100m (Boys)", winners: ["Rahul C G"], runners: ["Manjunath C P"] },
            { game: "Shotput (Girls)", winners: ["Spandana"], runners: [] },
            { game: "Relay (Girls)", winners: ["Team CSE"], runners: [] },
            { game: "Relay (Boys)", winners: ["Team CSE"], runners: [] },
            { game: "Javelin (Girls)", winners: ["Bhumika"], runners: [] },
            { game: "Volley Ball", winners: [], runners: ["Team UNICS"] },
            { game: "Throw Ball", winners: ["Team CSE"], runners: [] },
            { game: "Tennikoit", winners: ["Disha V Kumar"], runners: ["Nisarga G S"] },
            { game: "Badminton", winners: ["Kalpana V"], runners: ["Apekshaa Shamnur"] },
            { game: "Kabaddi", winners: [""], runners: ["Team UNICS"] }
        ]
    },
    {
        name: "EEE",
        games: [{ game: "100m (Girls)", winners: ["Arathi"], runners: [] },
                { game: "Javelin (Boys)", winners: [], runners: ["Ankush"] }
    ]
    },
    {
        name: "AIML",
        games: [{ game: "100m (Girls)", runners: ["Khushi"] },
                { game: "Javelin (Boys)", winners: ["ShivaKumar"], runners: [] },
                { game: "Kabaddi", winners: ["Team AIML"], runners: [""] }
    ]
    },
    {
        name: "EC",
        games: [{ game: "Shotput (Girls)", runners: ["Akshata"] }]
    },
    {
        name: "IS",
        games: [
            { game: "Relay (Girls)", winners: [], runners: ["Team IS"] },
            { game: "Shotput (Girls)", runners: ["Gagana"] },
            { game: "Shotput(Boys)", winners: ["Karthik A S"], runners: [] },
            { game: "Javelin (Girls)", runners: ["Gagana"] },
            { game: "Dog and the Bone", winners: [], runners: ["ISE"] },
            { game: "Throw Ball", winners: [], runners: ["Team ISE"] },
            
        ]
    },
    { name: "CSDS", games: [
        { game: "Relay (Boys)", winners: [], runners: ["Team Data Science"] },
    ] },
    { name: "CSBS", games: [
        { game: "Laghori", winners: [""], runners: ["Team CSBS"] }
    ] },
    { name: "Mechanical", games: [] },
    { name: "Civil", games: [
        { game: "Shotput(Boys)", winners: [], runners: ["Naveen"] },
        { game: "Laghori", winners: ["Team Civil"], runners: [""] }
    ] },
    { name: "Chemical", games: [] },
    { name: "Textile", games: [] },
    { name: "CS Design", games: [{ game: "Volley Ball", winners: ["Team Design"], runners: [] }] },
    { name: "Bio Technology", games: [] }
];


const leaderboardBody = document.getElementById("leaderboard-body");
const branchDetailsDiv = document.getElementById("branch-details");
const branchDetailsContent = document.getElementById("branch-details-content");

function getEmoji(rank) {
    switch (rank) {
        case 1: return '🥇';
        case 2: return '🥈';
        case 3: return '🥉';
        default: return ''; 
    }
}


branches.sort((a, b) => {
    const totalPointsA = a.games.reduce((acc, game) => acc + 
        ((game.winners ? game.winners.length : 0) * 10) + 
        ((game.runners ? game.runners.length : 0) * 5), 0);
    const totalPointsB = b.games.reduce((acc, game) => acc + 
        ((game.winners ? game.winners.length : 0) * 10) + 
        ((game.runners ? game.runners.length : 0) * 5), 0);
    return totalPointsB - totalPointsA;
});


branches.forEach((branch, index) => {
    const totalWinnerPoints = branch.games.reduce((acc, game) => acc + 
        ((game.winners ? game.winners.length : 0) * 10), 0);
    const totalRunnerPoints = branch.games.reduce((acc, game) => acc + 
        ((game.runners ? game.runners.length : 0) * 5), 0);
    const totalPoints = totalWinnerPoints + totalRunnerPoints;

    const row = document.createElement("tr");
    row.dataset.branchName = branch.name;
    row.dataset.games = JSON.stringify(branch.games);

    row.innerHTML = `
        <td>${getEmoji(index + 1)} ${branch.name}</td>
        <td>${totalWinnerPoints} points</td>
        <td>${totalRunnerPoints} points</td>
        <td>${totalPoints} points</td>
    `;

    row.addEventListener("click", () => {
        displayBranchDetails(branch.name, branch.games);
    });

    leaderboardBody.appendChild(row);
});


function displayBranchDetails(branchName, games) {
    branchDetailsContent.innerHTML = `
        <div style="border: 2px solid #4CAF50; padding: 15px; border-radius: 5px; font-family: Arial, sans-serif; background-color: #fff; color: #333;">
            <h3 style="color: #4CAF50; text-align: center; margin-bottom: 15px;">Branch Details</h3>
            <p style="font-size: 16px; margin-bottom: 10px;"><strong>Branch:</strong> ${branchName}</p>
            <h4 style="margin-bottom: 10px; font-size: 18px; color: #555;">Games Information</h4>
            ${games.map(game => `
                <div style="margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; background-color: #f9f9f9;">
                    <p style="font-size: 16px; margin: 5px 0; color: #000;"><strong>Game:</strong> ${game.game}</p>
                    <div style="margin-left: 10px;">
                        <p style="margin: 5px 0; font-size: 14px; color: #444;"><strong>Winners:</strong></p>
                        <ul style="margin: 0; padding-left: 0; list-style: none; font-size: 14px; color: #333;">
                            ${game.winners && game.winners.length > 0
                                ? game.winners.map(winner => `<li>${winner}</li>`).join("")
                                : `<li style="color: #888;">None</li>`}
                        </ul>
                        ${game.runners && game.runners.length > 0 ? `
                        <p style="margin: 5px 0; font-size: 14px; color: #444;"><strong>Runners:</strong></p>
                        <ul style="margin: 0; padding-left: 0; list-style: none; font-size: 14px; color: #333;">
                            ${game.runners.map(runner => `<li>${runner}</li>`).join("")}
                        </ul>` : ""}
                    </div>
                </div>
            `).join("")}
        </div>
    `;

    branchDetailsDiv.classList.remove("d-none");
}



