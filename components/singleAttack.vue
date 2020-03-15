<template>
  <div>
    <!--ViewWrapper-->
    <mdb-view>
      <mdb-mask class="gradient d-flex justify-content-center align-items-center">
        <mdb-container>
          <!-- Card -->
          <div class="card testimonial-card">
            <div class="card-up indigo lighten-1"></div>
            <div class="avatar mx-auto white">
              <img :src="profileImage" class="rounded-circle mt-4" />
            </div>
            <!-- Content -->
            <div class="card-body">
              <!-- Name -->
              <h1 class="card-title h1-responsive font-weight-bold text-center">{{foundName}}</h1>
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
              ["Integer Egestas", "assets/Avatar (8).png", ["https://cdn3-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg", "https://www.vets4pets.com/siteassets/species/dog/puppy/puppy-running-playing.jpg","https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200"]], 
              ["Felis Libero", "assets/Avatar (3).png", ["https://www.vets4pets.com/siteassets/species/dog/puppy/puppy-running-playing.jpg55"]],  
              ["Etiam Tristique", "assets/Avatar (9).png", ["https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg55?imwidth=1200"]],
              ["Lectus Ex", "assets/Avatar (4).png", ["https://www.petmd.com/sites/default/files/puppy-potty-training-388719256.jpg55"]],
              ["Leaky Attacker", "assets/Avatar (7).png", ["https://metro.co.uk/wp-content/uploads/2017/02/ad_2347111391.jpg55"]]
            ];
          //Items in order [LinkedIn, Twitter, Facebook ...]
          var serviceIcons = ['<a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"></i></a>', '<a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>', '<a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>'];
          // Go through all images and check for the first one that can be loaded
          var i,j;
          var imagestr = "You were indentified via ";
          var that = this;
          //Loop to go through all people
          for (i = 0; i < profiles.length; i++) {
            //Loop to go through all images for this person
                for (j = 0; j < profiles[i][2].length; j++) {
                    this.verifyImageURL(profiles[i][2][j], i, j, function (imageExists, i, j) {
                            if (imageExists === true) {
                                    var profileName = profiles[i][0];
                                    that.foundName = "Hi, " + profileName + "! 👋";
                                    imagestr = imagestr + serviceIcons[j]
                                    that.identifiedServices = imagestr;
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

