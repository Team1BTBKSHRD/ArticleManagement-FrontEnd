$(document).ready(function() {
  $('#form-signup').bootstrapValidator({
      //excluded: [':disabled'],
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          firstname: {
              validators: {
                  notEmpty: {
                      message: 'The firstname is required'
                  }
              }
          },
          lastname: {
              validators: {
                  notEmpty: {
                      message: 'The lastname is required'
                  }
              }
          },
          gender: {
              validators: {
                  notEmpty: {
                      message: 'Gender is required'
                  }
              }
          },
          country: {
              validators: {
                  notEmpty: {
                      message: 'Country required'
                  }
              }
          },
          city: {
              validators: {
                  notEmpty: {
                      message: 'City required'
                  }
              }
          },
          mobilephone: {
              validators: {
                  notEmpty: {
                      message: 'Mobile phone required'
                  },
                  regexp: {
                      regexp: /^[1]?[0-9]\d{8}$/,
                      message: '9 Digits only, and start with 0'
                  }
              }
          },
          email: {
              validators: {
                  notEmpty: {
                      message: 'Email required'
                  },
                  emailAddress: {
                      message: 'The value is not a valid email address'
                  }
              }
          },
          address: {
              validators: {
                  notEmpty: {
                      message: 'Address required'
                  }
              }
          }
      }
  })
});