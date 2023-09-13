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
                            <input type="radio" name="gender" value="male" onclick="malefunc()" class="mr-1">Male<br>
                        
                            <input type="radio" name="gender" value="female" onclick="femalefunc()" class="mr-1">Female <br><br>
                    
                            <hr><br>
                <button type="button" onclick="calculate(), pools()" class="daddy bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">Submit</button>

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
        


        <button type="button" onclick="location.href = '/logon';" id="yes" class="hidden bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded right-2">Sign in</button>
        <p class="hidden" id="yes">or</p>
        <button type="button" onclick="location.href = '/enternew';" id="yes" class="hidden bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded right-2">Sign up</button>

        <!-- <img src="/static/pool.jpg" id="pool-image" height="150" width="250" class="hidden">
        <img src="/static/pool.jpg" id="pool-image2" height="150" width="250" class="hidden lg:block">
        <img src="/static/pool.jpg" id="pool-image3" height="150" width="250" class="hidden xl:block"> -->
    </div>
</div>



<!-- <div class="fixed bottom-0 w-full">  -->
</div></body>
</template>
