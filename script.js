function getComputerChoice() {
    const choice = [
        "Rock",
        "Paper",
        "Scissors"
      ];
      
      let randomItem = choice[Math.floor(Math.random()*choice.length)]; 

      return randomItem;
}
