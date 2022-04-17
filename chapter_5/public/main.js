class Game {
  constructor() {
    this.controlBatuPlayer = document.querySelector(
      "#game-control .gambar-batu"
    );
    this.controlMenangBatuPlayer = document.querySelector(
      "#game-control .gambar-batu-player-bayangan"
    );

    this.controlKertasPlayer = document.querySelector(
      "#game-control .gambar-kertas"
    );
    this.controlMenangKertasPlayer = document.querySelector(
      "#game-control .gambar-kertas-player-bayangan"
    );

    this.controlGuntingPlayer = document.querySelector(
      "#game-control .gambar-gunting"
    );
    this.controlMenangGuntingPlayer = document.querySelector(
      "#game-control .gambar-gunting-player-bayangan"
    );

    this.controlBatuCom = document.querySelector(
      "#game-control .gambar-batu-com"
    );

    this.controlKertasCom = document.querySelector(
      "#game-control .gambar-kertas-com"
    );

    this.controlGuntingCom = document.querySelector(
      "#game-control .gambar-gunting-com"
    );
    this.controlMenangBatuCom = document.querySelector(
      "#game-control .gambar-batu-com-bayangan"
    );
    this.controlMenangKertasCom = document.querySelector(
      "#game-control .gambar-kertas-com-bayangan"
    );
    this.controlMenangGuntingCom = document.querySelector(
      "#game-control .gambar-gunting-com-bayangan"
    );

    this.controlVs = document.querySelector("#game-control .match");
    this.PiliMenangKalah = document.querySelector("#ractangle");

    this.controlBatuPlayer.addEventListener("click", () => {
      this.controlVs.style.display = "none";
      this.PiliMenangKalah.style.display = null;
      this.pilihBatu();
    });

    this.controlKertasPlayer.addEventListener("click", () => {
      this.controlVs.style.display = "none";
      this.PiliMenangKalah.style.display = null;
      this.pilihKertas();
    });

    this.controlGuntingPlayer.addEventListener("click", () => {
      this.controlVs.style.display = "none";
      this.PiliMenangKalah.style.display = null;
      this.pilihGunting();
    });
  }

  pilihBatu() {
    const pilihan = ["kertas", "batu", "Gunting"];
    const comp = Math.floor(Math.random() * 3);
    const hasil = pilihan[comp];
    const batu = "batu";
    const tampilHasil = document.querySelector(".style-win");

    // const menangBatu = docuemnt.querySelector("");

    if (hasil === "Gunting" && batu === "batu") {
      tampilHasil.textContent = " You Win ";
      this.controlMenangKertasCom.style.background = "none";
      this.controlMenangBatuCom.style.background = "none";
      this.controlMenangGuntingCom.style.background = null;
      this.controlMenangBatuPlayer.style.background = null;
      this.controlMenangKertasPlayer.style.background = "none";
      this.controlMenangGuntingPlayer.style.background = "none";
    } else if (hasil === "batu" && batu === "batu") {
      tampilHasil.textContent = " Draw ";
      this.controlMenangKertasCom.style.background = "none";
      this.controlMenangGuntingCom.style.background = "none";
      this.controlMenangBatuCom.style.background = null;
      this.controlMenangBatuPlayer.style.background = null;
      this.controlMenangGuntingPlayer.style.background = "none";
      this.controlMenangKertasPlayer.style.background = "none";
    } else if (hasil && batu === "batu") {
      tampilHasil.textContent = " You Lose ";
      this.controlMenangGuntingCom.style.background = "none";
      this.controlMenangBatuCom.style.background = "none";
      this.controlMenangKertasCom.style.background = null;
      this.controlMenangBatuPlayer.style.background = null;
      this.controlMenangKertasPlayer.style.background = "none";
      this.controlMenangGuntingPlayer.style.background = "none";
    }
  }

  pilihKertas() {
    const pilihan = ["kertas", "batu", "Gunting"];
    const comp = Math.floor(Math.random() * 3);
    const hasil = pilihan[comp];
    const kertas = "kertas";
    const tampilHasil = document.querySelector(".style-win");

    if (hasil === "Gunting" && kertas === "kertas") {
      tampilHasil.textContent = " You Lose  ";
      this.controlMenangKertasCom.style.background = "none";
      this.controlMenangBatuCom.style.background = "none";
      this.controlMenangGuntingCom.style.background = null;
      this.controlMenangBatuPlayer.style.background = "none";
      this.controlMenangKertasPlayer.style.background = null;
      this.controlMenangBatuPlayer.style.background = "none";
      this.controlMenangGuntingPlayer.style.background = "none";
    } else if (hasil === "kertas" && kertas === "kertas") {
      tampilHasil.textContent = " Draw ";
      this.controlMenangKertasCom.style.background = null;
      this.controlMenangGuntingCom.style.background = "none";
      this.controlMenangBatuCom.style.background = "none";
      this.controlMenangKertasPlayer.style.background = null;
      this.controlMenangBatuPlayer.style.background = "none";
      this.controlMenangGuntingPlayer.style.background = "none";
    } else if (hasil && kertas === "kertas") {
      tampilHasil.textContent = " You Win ";
      this.controlMenangKertasCom.style.background = "none";
      this.controlMenangGuntingCom.style.background = "none";
      this.controlMenangBatuCom.style.background = null;
      this.controlMenangKertasPlayer.style.background = null;
      this.controlMenangBatuPlayer.style.background = "none";
      this.controlMenangGuntingPlayer.style.background = "none";
    }
  }

  pilihGunting() {
    const pilihan = ["kertas", "batu", "Gunting"];
    const comp = Math.floor(Math.random() * 3);
    const hasil = pilihan[comp];
    const gunting = "gunting";
    const tampilHasil = document.querySelector(".style-win");
    if (hasil === "Gunting" && gunting === "gunting") {
      tampilHasil.textContent = " Draw ";
      this.controlMenangKertasCom.style.background = "none";
      this.controlMenangBatuCom.style.background = "none";
      this.controlMenangGuntingCom.style.background = null;
      this.controlMenangKertasPlayer.style.background = "none";
      this.controlMenangBatuPlayer.style.background = "none";
      this.controlMenangGuntingPlayer.style.background = null;
    } else if (hasil === "batu" && gunting === "gunting") {
      tampilHasil.textContent = " You Lose ";
      this.controlMenangKertasCom.style.background = "none";
      this.controlMenangGuntingCom.style.background = "none";
      this.controlMenangBatuCom.style.background = null;
      this.controlMenangKertasPlayer.style.background = "none";
      this.controlMenangBatuPlayer.style.background = "none";
      this.controlMenangGuntingPlayer.style.background = null;
    } else if (hasil && gunting === "gunting") {
      tampilHasil.textContent = " You Win ";
      this.controlMenangKertasCom.style.background = null;
      this.controlMenangGuntingCom.style.background = "none";
      this.controlMenangBatuCom.style.background = "none";
      this.controlMenangKertasPlayer.style.background = "none";
      this.controlMenangBatuPlayer.style.background = "none";
      this.controlMenangGuntingPlayer.style.background = null;
    }
  }
}

this.controlMenangBatuCom = document.querySelector(
  "#game-control .gambar-batu-com-bayangan"
);
this.controlMenangKertasCom = document.querySelector(
  "#game-control .gambar-kertas-com-bayangan"
);
this.controlMenangGuntingCom = document.querySelector(
  "#game-control .gambar-gunting-com-bayangan"
);
this.controlMenangBatuPlayer = document.querySelector(
  "#game-control .gambar-batu-player-bayangan"
);
this.controlMenangKertasPlayer = document.querySelector(
  "#game-control .gambar-kertas-player-bayangan"
);
this.controlMenangGuntingPlayer = document.querySelector(
  "#game-control .gambar-gunting-player-bayangan"
);

this.PiliMenangKalah = document.querySelector("#ractangle");
const overlayButton = document.querySelector("#overlay button");

overlayButton.addEventListener("click", () => {
  // Kita display none overlay
  overlay.style.display = "none";
  this.controlMenangBatuCom.style.background = "none";
  this.controlMenangKertasCom.style.background = "none";
  this.controlMenangGuntingCom.style.background = "none";
  this.controlMenangBatuPlayer.style.background = "none";
  this.controlMenangKertasPlayer.style.background = "none";
  this.controlMenangGuntingPlayer.style.background = "none";
  this.PiliMenangKalah.style.display = "none";
});

new Game();
