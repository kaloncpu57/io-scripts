function starmanSprite() {
  this.audio = new Audio("https://kaloncpu57.github.io/io-scripts/driftin/starman-sprite.mp3");
  var a = this.audio;
  var end = 0;

  a.addEventListener("timeupdate", function () {
    if (this.currentTime > end) this.pause();
  }, false);

  this.tracks = [
    {title: "Super Mario Bros.", start: 0, end: 8},
    {title: "Super Mario Bros. 2", start: 8.5, end: 16.5},
    {title: "Super Mario Bros. 3", start: 17, end: 25},
    {title: "Super Mario World", start: 25.5, end: 33.5},
    {title: "Super Mario World (Star World)", start: 34, end: 42},
    {title: "Super Mario Kart", start: 42.5, end: 50.5},
    {title: "Super Mario All Stars", start: 51, end: 59},
    {title: "Super Mario World 2: Yoshi's Island", start: 59.5, end: 67.5},
    {title: "Super Mario RPG", start: 68, end: 76},
    {title: "Super Mario 64 (Wing Cap)", start: 76.5, end: 84.5},
    {title: "Super Mario 64 (Metal Cap)", start: 85, end: 93},
    {title: "Super Mario 64 DS (Balloon Mario)", start: 93.5, end: 101.5},
    {title: "Super Mario 64 DS (Fire Yoshi)", start: 102, end: 110},
    {title: "Super Mario 64 DS (Hoot the Owl)", start: 110.5, end: 118.5},
    {title: "Super Mario 64 DS (Super Mushroom)", start: 119, end: 127},
    {title: "Super Mario 64 DS (Bounce & Trounce)", start: 127.5, end: 135.5},
    {title: "Mario Kart 64", start: 136, end: 144},
    {title: "Super Smash Bros.", start: 144.5, end: 152.5},
    {title: "Paper Mario (Pleasant Path HP)", start: 153, end: 161},
    {title: "Paper Mario (Journey to Bowser's Castle)", start: 161.5, end: 169.5},
    {title: "Mario Tennis", start: 170, end: 178},
    {title: "Mario Party 3", start: 178.5, end: 186.5},
    {title: "Dr. Mario (GameBoy)", start: 187, end: 195},
    {title: "Super Mario Advance", start: 195.5, end: 203.5},
    {title: "Super Mario Advance 4: Super Mario Bros. 3", start: 204, end: 212},
    {title: "Super Mario World: Super Mario Advance 2", start: 212.5, end: 220.5},
    {title: "Super Mario World: Super Mario Advance 2 (Star World)", start: 221, end: 229},
    {title: "Yoshi's Island: Super Mario Advance 3", start: 229.5, end: 237.5},
    {title: "Mario Kart: Super Circuit", start: 238, end: 246},
    {title: "Mario and Luigi: Superstar Saga", start: 246.5, end: 254.5},
    {title: "Mario Golf: Advance Tour", start: 255, end: 263},
    {title: "Mario Pinball Land", start: 263.5, end: 271.5},
    {title: "Mario Kart: Double Dash", start: 272, end: 280},
    {title: "Paper Mario: The Thousand Year Door", start: 280.5, end: 288.5},
    {title: "Mario Power Tennis", start: 289, end: 297},
    {title: "Mario Party 6", start: 297.5, end: 305.5},
    {title: "Mario Superstar Baseball", start: 306, end: 314},
    {title: "Yoshi Touch and Go", start: 314.5, end: 322.5},
    {title: "Mario Kart DS", start: 323, end: 331},
    {title: "Tetris DS", start: 331.5, end: 339.5},
    {title: "Mario Hoops 3-on-3", start: 340, end: 348},
    {title: "Super Paper Mario", start: 348.5, end: 356.5},
    {title: "Mario Strikers Charged", start: 357, end: 365},
    {title: "Super Mario Galaxy", start: 365.5, end: 373.5},
    {title: "Super Mario Galaxy 2", start: 374, end: 382},
    {title: "Mario Kart Wii", start: 382.5, end: 390.5},
    {title: "New Super Mario Bros. Wii (Map Screen)", start: 391, end: 399},
    {title: "New Super Mario Bros. Wii (U)", start: 399.5, end: 407.5},
    {title: "New Super Mario Bros. U (Yoshi)", start: 408, end: 416},
    {title: "New Super Mario Bros. U (Baby Yoshi)", start: 416.5, end: 424.5},
    {title: "New Super Mario Bros. U (Boost Star)", start: 425, end: 433},
    {title: "Mario Sports Mix", start: 433.5, end: 441.5},
    {title: "Mario Sports Mix (Star Road)", start: 442, end: 450},
    {title: "Just Dance 3", start: 450.5, end: 458.5},
    {title: "Nintendo Land", start: 459, end: 467},
    {title: "Super Mario 3D Land", start: 467.5, end: 475.5},
    {title: "Super Mario 3D World", start: 476, end: 484},
    {title: "Mario Kart 7", start: 484.5, end: 492.5},
    {title: "Mario Kart 8", start: 493, end: 501},
    {title: "Paper Mario: Sticker Star", start: 501.5, end: 509.5},
    {title: "Mario and Donkey Kong: Minis on the Move", start: 510, end: 518},
    {title: "Mario vs Donkey Kong: Tipping Stars", start: 518.5, end: 526.6},
    {title: "Mario Party: Island Tour", start: 527, end: 535},
    {title: "Yoshi's New Island", start: 535.5, end: 543.5},
    {title: "NES Remix 2", start: 544, end: 552},
    {title: "Mario Party 10", start: 552.5, end: 560.5},
    {title: "Paper Mario: Sticker Star (Kerstis Power)", start: 561, end: 569},
    {title: "Super Smash Bros for Wii U (Lost Levels Medley)", start: 569.5, end: 577.5},
    {title: "Super Smash Bros for Wii U (Egg Planet Remix)", start: 578, end: 586},
    {title: "Super Smash Bros. for Wii U (Super Mario World Medley)", start: 586.5, end: 594.5},
    {title: "Super Smash Bros for Wii U (3DS) (Trophy Rush Fever)", start: 595, end: 602.022},
    {title: "Super Mario Bros Deluxe", start: 602.5, end: 610.5}
  ];

  this.randomTrack = function () {
    return Math.floor(Math.random() * this.tracks.length);
  };

  this.playTrack = function (index) {
    var track = this.tracks[index];
    this.audio.currentTime = track.start;
    end = track.end;
    a.play();
    console.log("Now playing Starman theme from: " + track.title);
  };

  this.playRandom = function () {
    this.playTrack(this.randomTrack());
  };
}

var sprite = new starmanSprite();

setupSocket = new Function (
    setupSocket.toString()
    .replace("useAbilityContainer.style.display=\"none\"", "useAbilityContainer.style.display = \"none\";if (player && player.classIndex == 9 && !gameOver) sprite.playRandom();")
    .replace(/^function[^{]+{/i,"")
    .replace(/}[^}]*$/i, "")
);
