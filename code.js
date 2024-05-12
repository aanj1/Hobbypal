onEvent("starthomescreen", "click", function( ) {
  setScreen("intrestform");
});
onEvent("interestoutdoor", "input", function( ) {
  onEvent("Interestindoor", "input", function( ) {
    onEvent("Interestindoor2nd", "input", function( ) {
      onEvent("intrestnext", "click", function( ) {
        setScreen("Homepage");
      });
    });
  });
});
onEvent("Recomendationshome", "click", function( ) {
  setScreen("reccomendationspage");
});
onEvent("1stcheckbox", "click", function( ) {
  onEvent("2ndcheckbox", "click", function( ) {
    onEvent("parentcheckbox", "click", function( ) {
      setScreen("Rewardspage");
    });
  });
});
onEvent("redeempoints", "click", function( ) {
  setScreen("Palpointspop-up");
});
onEvent("pointsbackhome", "click", function( ) {
  setScreen("homepageafterrewards");
});
