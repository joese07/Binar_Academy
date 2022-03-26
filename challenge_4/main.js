//logika dalam suit
//ketika player batu , kertas dan gunting di tekan atau dipilih
//maka comp akan berjalan, memilih random pilihan
// player dan comp akan mengecek hasil yang diperoleh dengan logika if
// jika player == comp  : Seri
// jika player batu && comp = gunting : hore menang
// jika player batu && comp = kertas : yah kalah
// jika player gunting &$ comp = batu : yah kalah
// jika player gunting && comp = kertas hore menang
// jika player kertas && comp = batu :  hore menang
// jika player kertas && comp = gunting : yang kalah

class Game {
  constructor() {
    this.controlBatuPlayer = document.querySelector(
      "#game-control .gambar-batu"
    );

    this.controlKertasPlayer = document.querySelector(
      "#game-control .gambar-kertas"
    );

    this.controlGuntingPlayer = document.querySelector(
      "#game-control .gambar-gunting"
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
    this.controlMenangBatu = document.querySelector(
      "#game-control .gambar-batu-com-bayangan"
    );
    this.controlMenangKertas = document.querySelector(
      "#game-control .gambar-kertas-com-bayangan"
    );
    this.controlMenangGunting = document.querySelector(
      "#game-control .gambar-gunting-com-bayangan"
    );

    this.controlVs = document.querySelector("#game-control .match");

    this.controlBatuPlayer.addEventListener("click", () => {
      this.controlVs.style.display = "none";

      this.pilihBatu();
    });

    this.controlKertasPlayer.addEventListener("click", () => {
      this.controlVs.style.display = "none";
      this.pilihKertas();
    });

    this.controlGuntingPlayer.addEventListener("click", () => {
      this.controlVs.style.display = "none";

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
      this.controlMenangKertas.style.background = "none";
      this.controlMenangBatu.style.background = "none";
      this.controlMenangGunting.style.background = null;
    } else if (hasil === "batu" && batu === "batu") {
      tampilHasil.textContent = " Draw ";
      this.controlMenangKertas.style.background = "none";
      this.controlMenangGunting.style.background = "none";
      this.controlMenangBatu.style.background = null;
    } else if (hasil && batu === "batu") {
      tampilHasil.textContent = " You Lose ";
      this.controlMenangGunting.style.background = "none";
      this.controlMenangBatu.style.background = "none";
      this.controlMenangKertas.style.background = null;
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
      this.controlMenangKertas.style.background = "none";
      this.controlMenangBatu.style.background = "none";
      this.controlMenangGunting.style.background = null;
    } else if (hasil === "kertas" && kertas === "kertas") {
      tampilHasil.textContent = " Draw ";
      this.controlMenangKertas.style.background = null;
      this.controlMenangGunting.style.background = "none";
      this.controlMenangBatu.style.background = "none";
    } else if (hasil && kertas === "kertas") {
      tampilHasil.textContent = " You Win ";
      this.controlMenangKertas.style.background = "none";
      this.controlMenangGunting.style.background = "none";
      this.controlMenangBatu.style.background = null;
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
      this.controlMenangKertas.style.background = "none";
      this.controlMenangBatu.style.background = "none";
      this.controlMenangGunting.style.background = null;
    } else if (hasil === "batu" && gunting === "gunting") {
      tampilHasil.textContent = " You Lose ";
      this.controlMenangKertas.style.background = "none";
      this.controlMenangGunting.style.background = "none";
      this.controlMenangBatu.style.background = null;
    } else if (hasil && gunting === "gunting") {
      tampilHasil.textContent = " You Win ";
      this.controlMenangKertas.style.background = null;
      this.controlMenangGunting.style.background = "none";
      this.controlMenangBatu.style.background = "none";
    }
  }
}

this.controlMenangBatu = document.querySelector(
  "#game-control .gambar-batu-com-bayangan"
);
this.controlMenangKertas = document.querySelector(
  "#game-control .gambar-kertas-com-bayangan"
);
this.controlMenangGunting = document.querySelector(
  "#game-control .gambar-gunting-com-bayangan"
);
const overlayButton = document.querySelector("#overlay button");

overlayButton.addEventListener("click", () => {
  // Kita display none overlay
  overlay.style.display = "none";
  this.controlMenangBatu.style.background = "none";
  this.controlMenangKertas.style.background = "none";
  this.controlMenangGunting.style.background = "none";
  new Game();
});
