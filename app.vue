<template>
  <Header />

  <body class="bg-gray-300">
    <div>
      <div class="flex justify-center text-center">
        <div class=""></div>


        <div class="rounded-xl">

          <h1 class="text-2xl font-bold">PissCounter</h1>
          <hr>
          <br>

          <div class="">

            <b>Daily pisses</b><br>
            <input class="rounded py-2 px-3" type="text" id="antall" placeholder="avg: 8 times"><br><br>


            <b>Age</b><br>
            <input class="rounded py-2 px-3" type="text" id="age"><br><br>


            <b>Born gender</b><br>
            <input type="radio" name="gender" value="male" @click="malefunc" class="mr-1">Male<br>

            <input type="radio" name="gender" value="female" @click="femalefunc" class="mr-1">Female <br><br>

            <hr><br>
            <button type="button" @click="calculate"
              class="daddy bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">Submit</button>

          </div>
          <br>

        </div>

      </div>



      <br>
      <div class="flex flex-col text-center" style="display: none;" id="bet">
        <p id="result" class=""></p>
        <b id="res" class=""></b>
        <br><br>
        <div class="flex justify-center">



          <button type="button" onclick="location.href = '/logon';" id="yes"
            class="hidden bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded right-2">Sign
            in</button>
          <p class="hidden" id="yes">or</p>
          <button type="button" onclick="location.href = '/enternew';" id="yes"
            class="hidden bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded right-2">Sign
            up</button>

          <img src="/static/pool.jpg" id="pool-image" height="150" width="250" class="hidden">
        <img src="/static/pool.jpg" id="pool-image2" height="150" width="250" class="hidden lg:block">
        <img src="/static/pool.jpg" id="pool-image3" height="150" width="250" class="hidden xl:block">
        </div>
      </div>



      <!-- <div class="fixed bottom-0 w-full">  -->
    </div>
</body>

<Footer /></template>

<script>
export default {

  name: 'Home',
  setup() {

    var male = false;
    var female = false;
    var pool = 0; 

    const calculate = () => {
      var ye = 365;
      var antall = document.getElementById("antall").value;
      var age = document.getElementById("age").value;
      var year = age * ye;
      var piss = parseFloat(0) + (parseFloat(antall) * 0.3)
      var result = piss * year;

      if (female == true) {
        result = result - (result * 0.25);
      }
      
      pool = result / 13200;

      document.getElementById("result").innerHTML = "You have pissed " + result.toFixed(2) + " liters in your lifetime, this is equivalent to " + pool.toFixed(2) + " pools";

      document.getElementById("bet").style.display = "block";
  }


    const malefunc = () => {
        male = true;
        female = false;
    }

    const femalefunc = () => {
        male = false;
        female = true;
    }

    const pools = () => {
        if (pool >= 1) {
          document.getElementById("pool-image").style.display = "block";
        }
        if (pool >= 2) {
          document.getElementById("pool-image2").style.display = "block";
        }
        if (pool >= 3) {
          document.getElementById("pool-image3").style.display = "block";
        }
        if (pool <= 1) {
          document.getElementById("pool-image").style.display = "none";
          document.getElementById("pool-image2").style.display = "none";
          document.getElementById("pool-image3").style.display = "none";
        }
      }

    return {male, female, pool, malefunc, femalefunc, pools, calculate}
  }
}

  
</script> 