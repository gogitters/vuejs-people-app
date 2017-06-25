/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      people: [],
      newName: '',
      newBio: ''
    },
    mounted: function() {
      $.get('/api/v1/people.json', function(result) {
        this.people = result;
      }.bind(this));
    },
    methods: {
      addPerson: function() {
        this.people.push({name: this.newName, bio: this.newBio, bioVisible: false});
        this.newName = "";
        this.newBio = "";
      },
      deletePerson: function(index) {
        // var index = this.people.indexOf(person);
        this.people.splice(index, 1);
      },
      toggleBio: function(person) {
        // if (person.bioVisible) {
        //   person.bioVisible = false;
        // } else {
        //   person.bioVisible = true;
        // }
        person.bioVisible = !person.bioVisible;
      }
    }
  });
});
