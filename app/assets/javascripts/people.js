document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      people: [
        {
          name: "Sami",
          bio: "Flannel tote bag cliche umami. Echo park beard mumblecore swag shabby chic raclette. Health goth crucifix selfies, humblebrag celiac kitsch blue bottle lyft. Viral XOXO retro narwhal salvia, 90's VHS four dollar toast vexillologist tumeric williamsburg. VHS neutra health goth PBR&B, la croix occupy deep v butcher bushwick lomo. Hoodie raw denim normcore readymade. VHS butcher photo booth, roof party pour-over cray sriracha wayfarers keytar bushwick distillery. Hell of fanny pack jianbing, chambray lomo butcher drinking vinegar sartorial. Forage lomo food truck, vegan 8-bit keytar squid tilde woke offal organic tumblr helvetica cardigan. Coloring book lomo vegan raw denim blue bottle before they sold out. Crucifix single-origin coffee sustainable, williamsburg neutra vinyl 90's hexagon aesthetic. Semiotics nesciunt tousled, synth Tumblr cornhole sriracha hella.",
          bioVisible: false
        },
        {
          name: "Kenny",
          bio: "Tattooed letterpress gluten-free ugh, adipisicing scenester church-key gentrify tousled gastropub pour-over Shoreditch asymmetrical lomo High Life. Mumblecore nostrud Godard 3 wolf moon quinoa forage. Next level Bushwick Schlitz, dolore cliche salvia Brooklyn minim dreamcatcher you probably haven't heard of them before they sold out YOLO. Tattooed Tumblr delectus blog photo booth. Four loko flannel irony lomo, YOLO Odd Future Bushwick magna sunt PBR&B slow-carb. Biodiesel cornhole sunt flannel non fugiat. Raw denim nostrud officia Odd Future 8-bit, PBR nesciunt four loko viral.",
          bioVisible: false
        },
        {
          name: "Andy",
          bio: "Incididunt photo booth ethical reprehenderit adipisicing. Echo Park readymade Bushwick distillery Tonx. +1 semiotics qui duis literally. 8-bit et freegan chia mixtape, keffiyeh ut in anim chillwave enim cupidatat. Ea tofu trust fund you probably haven't heard of them. Typewriter placeat raw denim, excepteur deep v normcore sustainable. High Life vero irony squid.",
          bioVisible: false
        },
        {
          name: "Mike",
          bio: "Excepteur shabby chic semiotics Marfa, quinoa try-hard polaroid pariatur banh mi selfies incididunt brunch trust fund. Ethical dolor PBR&B Tumblr. Freegan ugh you probably haven't heard of them adipisicing mustache farm-to-table. Plaid enim aliqua laboris kale chips nesciunt, velit Austin meh wayfarers selfies flannel consequat. Shabby chic Neutra YOLO mumblecore hella, cray chambray id swag minim sriracha paleo. Butcher consequat pug placeat, hoodie esse dolor excepteur literally aute umami fixie. Voluptate craft beer fashion axe nesciunt Cosby sweater, narwhal id Truffaut American Apparel kale chips quinoa gentrify aesthetic Brooklyn.",
          bioVisible: false
        }
      ]
    }
  });
});
