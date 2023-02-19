/* carousel */

#profile-wrapper {
    width: 95%;
    max-width: 525px;
    position: relative;
  }
  
  #profile-carousel {
    width: 30vw;
    overflow: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }
  
  #profile-carousel::-webkit-scrollbar {
    height: 0;
  }
  
  #prev,
  #next {
    display: flex;
    justify-content: center;
    align-content: center;
    background: white;
    border: none;
    padding: 5px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;
    position: absolute;
  }
  
  #prev {
    top: 50%;
    left: 0;
    transform: translate(50%, -50%);
    display: none;
  }
  
  #next {
    top: 50%;
    right: -10%;
    transform: translate(-50%, -50%);
  }
  
  #profile-content {
    display: grid;
    grid-gap: 10px;
    grid-auto-flow: column;
    margin: auto;
    box-sizing: border-box;
  }
  
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
  }
  
  .item-img {
    width: 60px;
    border-radius: 50%;
    border: 3px solid transparent;
    background: -moz-linear-gradient(
      -45deg,
      #5700ff 0%,
      #ff009a 30%,
      #ffd100 100%
    );
    background: -webkit-linear-gradient(
      -45deg,
      #5700ff 0%,
      #ff009a 30%,
      #ffd100 100%
    );
    background: linear-gradient(135deg, #5700ff 0%, #ff009a 30%, #ffd100 100%);
  }
  
  /* end carousel */