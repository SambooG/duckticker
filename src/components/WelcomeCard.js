import React from "react";


{/*This will be the page you get redirected to after login. It will provide "about" info.
It will serve as an intermediary page so you can choose to view the ducks or the portfolio from the navbar */}

function WelcomeCard() {
  return (
    <div className="container">
      <div className="container">
        <h2>Duckticker</h2>
        <br></br>
        <p> Here you can login to view how your current stocks are trending, which will be displayed in adorable duck animation!
      You'll also be able to delete and add new stocks to your portfolio.
      <br></br>
      <br></br>
      Why ducks?
      <br></br>
We chose to represent how stocks are trending with a fun visual of rubber ducks because... c'mon who doesn't love cute little rubber ducks?
Also, with this visual it keeps things interesting and are hopes are that it will encourage people to have more of an interest in the stock market overall.</p>
        <img src="../assets/images/logo2.jpg" class="float-left" alt="" width="304" height="100%" />
        <img src="../assets/images/logo.jpg" class="float-right" alt="" width="304" height="100%" />
      </div>
    </div>

  );
}

export default WelcomeCard;
