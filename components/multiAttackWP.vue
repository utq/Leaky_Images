<template>
  <div>
    <!--ViewWrapper-->
    <mdb-view>
      <mdb-mask class="gradient d-flex justify-content-center align-items-center">
        <mdb-container>
          <div class="card">
            <div class="card-body aqua-gradient color-block font-weight-bold text-center text-white">
              This attack identifies 3 users based on 2 shared images on <a class="px-2 fa-lg li-ic"><i class="fab fa-wordpress"></i></a>
            </div>
          </div>
          <div class="card testimonial-card">
              <div class="card-up indigo lighten-1"></div>
              <div class="avatar mx-auto white">
                <img :src="profileImage" class="rounded-circle mt-4" />
              </div>
              <div class="card-body">
                <h1 class="card-title h1-responsive font-weight-bold text-center" v-html="foundName"></h1>
              </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-6" v-html="attackIMG1"></div>
              <div class="col-6" v-html="attackIMG2"></div>
            </div>
          </div>
        </mdb-container>
      </mdb-mask>
    </mdb-view>
  </div>
</template>

<script>

  import { mdbContainer, mdbView, mdbMask } from 'mdbvue';
  export default {
    name: 'AppPage',
    data: () => // Default values if no image found
    ({ foundName: "We were not able to identify you 😢",
       profileImage: "assets/Avatar (5).png",
       attackIMG1: '<div class="card card-image"> <div class="text-white justify-content-center align-items-center d-flex special-color-dark py-5 px-4"><div><br><br><br><br><br><br><h3 class="card-title pt-2"><strong>Image 1 did not load</strong></h3><br><br><br><br><br><br></div></div></div>',
       attackIMG2: '<div class="card card-image"> <div class="text-white justify-content-center align-items-center d-flex special-color-dark py-5 px-4"><div><br><br><br><br><br><br><h3 class="card-title pt-2"><strong>Image 2 did not load</strong></h3><br><br><br><br><br><br></div></div></div>' }),
    components: {
      mdbContainer,
      mdbView,
      mdbMask,
    },
    methods: {
      verifyImageURL: function(url, i, j, callBack){
        var img = new Image();
        img.src = url;
        img.onload = function () {
              callBack(true, i, j);
        };
        img.onerror = function () {
              callBack(false, i, j);
        };
      },
      launchAttack: function() {
          var profiles = [
              //FORMAT: Name, Profile image, RELATED PICTUES[Wordpress], 
              ["Felis Libero", "assets/Avatar (3).png", ["https://leakyblog2.files.wordpress.com/2020/03/whatsapp-image-2020-03-11-at-13.51.25.jpeg"]],  
              ["Etiam Tristique", "assets/Avatar (10).png", ["https://leakyblog3.files.wordpress.com/2020/03/whatsapp-image-2020-03-11-at-13.53.49.jpeg"]],
              ["Integer Egestas", "assets/Avatar (8).png", ["https://leakyblog3.files.wordpress.com/2020/03/whatsapp-image-2020-03-11-at-13.53.49.jpeg", "https://leakyblog2.files.wordpress.com/2020/03/whatsapp-image-2020-03-11-at-13.51.25.jpeg"]], 
            ];
          // Go through all images and check for the first one that can be loaded
          var i,j;
          var that = this;
          var dualIMGcount = 0;
          //Loop to go through all people
          for (i = 0; i < profiles.length; i++) {
            //Loop to go through all images for this person
                for (j = 0; j < profiles[i][2].length; j++) {
                    this.verifyImageURL(profiles[i][2][j], i, j, function (imageExists, i, j) {
                            if (imageExists === true) {
                                    if(profiles[i][2].length == 1 || (dualIMGcount == 1)){
                                    var PICURL;
                                    var profileName;
                                      if(i == 2)
                                        dualIMGcount++;
                                    }
                                    else{
                                      if(i == 2)
                                      dualIMGcount++;
                                    }
                                     if(i < 2 && dualIMGcount != 2){
                                      profileName = profiles[i][0];
                                      that.foundName = "Hi, <b>" + profileName + "</b>! 👋";
                                      that.profileImage = profiles[i][1];
                                      PICURL = profiles[i][2][j]; //URL
                                      that.attackIMG1 = '<div class="card card-image" style="background-image: url(' + PICURL + '); background-repeat: no-repeat; background-size: cover"> <div class="text-white justify-content-center align-items-center d-flex rgba-stylish-light py-5 px-4"><div><br><br><br><br><br><br><h3 class="card-title pt-2"><strong>This image identified you</strong></h3><br><br><br><br><br><br></div></div></div>';
                                      that.attackIMG2 = '<div class="card card-image"> <div class="text-white justify-content-center align-items-center d-flex special-color-dark py-5 px-4"><div><br><br><br><br><br><br><h3 class="card-title pt-2"><strong>You were identified by one image</strong></h3><br><br><br><br><br><br></div></div></div>';
                                     }
                                     else{
                                      if(dualIMGcount == 2){
                                        profileName = profiles[2][0];
                                        that.foundName = "Hi, <b>" + profileName + "</b>! 👋";
                                        that.profileImage = profiles[2][1];
                                        that.attackIMG1 = '<div class="card card-image" style="background-image: url(' + profiles[2][2][0] + '); background-repeat: no-repeat; background-size: cover"> <div class="text-white justify-content-center align-items-center d-flex rgba-stylish-light py-5 px-4"><div><br><br><br><br><br><br><h3 class="card-title pt-2"><strong>This image identified you</strong></h3><br><br><br><br><br><br></div></div></div>';
                                        that.attackIMG2 = '<div class="card card-image" style="background-image: url(' + profiles[2][2][1] + '); background-repeat: no-repeat; background-size: cover"> <div class="text-white justify-content-center align-items-center d-flex rgba-stylish-light py-5 px-4"><div><br><br><br><br><br><br><h3 class="card-title pt-2"><strong>This image identified you</strong></h3><br><br><br><br><br><br></div></div></div>';
                                      }
                                     }
                         } else {
                                //Skip to next image
                            }
                        });
                }
          }
        }
    },
    mounted() {
     this.launchAttack();
    }
  }
</script>

<style>
  .view {
    background-image: url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: calc(100vh);
  }
  .gradient {
    background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));
    background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  }
  h6 {
      line-height: 1.7;
  }
</style>