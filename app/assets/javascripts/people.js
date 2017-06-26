/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      people: [],
      newName: '',
      newBio: '',
      updateName: '',
      updateBio: '',
      errors: []
    },
    mounted: function() {
      $.get('/api/v1/people.json', function(result) {
        this.people = result;
      }.bind(this));
    },
    methods: {
      addPerson: function() {
        this.errors = [];
        var params = { name: this.newName, bio: this.newBio };
        $.post('/api/v1/people.json', params, function(result) {
          this.people.push(result);
          this.newName = "";
          this.newBio = "";
        }.bind(this)).fail(function(response) {
          // console.log(response);
          this.errors = response.responseJSON.errors;
        }.bind(this));
      },
      deletePerson: function(person) {
        var index = this.people.indexOf(person);
        $.ajax({
          url: '/api/v1/people/' + person.id + '.json',
          type: 'DELETE',
          success: function(response) {
            this.people.splice(index, 1);
          }.bind(this)
        });
      },
      updatePerson: function(person) {
        var that = this;
        var index = that.people.indexOf(person);
        $.ajax({
          url: '/api/v1/people/' + person.id + '.json',
          type: 'PATCH',
          data: { name: that.updateName, bio: that.updateBio },
          success: function(response) {
            that.people[index] = response;
            app.$forceUpdate();
            that.updateName = '';
            that.updateBio = '';
          }
        });
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
