/*
    Form category adding validator
*/
$(document).ready(function() {
        $('#addarticle').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                 
                 cate_title: {
                    validators: {
                        notEmpty: {
                           message: 'The titile is required'
                        }
                    }
                },
              cate_alias: {
                    validators: {
                        notEmpty: {
                           message: 'The alias is required'
                        }
                    }
                },
                cate_date: {
                    validators: {
                        notEmpty: {
                           message: 'The date is required'
                        }
                    }
                }
            }
        });
});