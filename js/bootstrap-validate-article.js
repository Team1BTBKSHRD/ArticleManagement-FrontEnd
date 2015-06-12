$(document).ready(function() {
    $('#addarticle').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
             
             txttitle: {
                validators: {
                    notEmpty: {
                       message: 'The Title is required'
                    }
                }
            },
            txtauthor: {
                validators: {
                    notEmpty: {
                       message: 'The Author Name is required'
                    }
                }
            },
            txtcatagory: {
                validators: {
                    notEmpty: {
                       message: 'The Category is required'
                    }
                }
            },
            txtdate: {
                validators: {
                    notEmpty: {
                       message: 'The Date is required'
                    }
                }
            }
        }
    });
});