(function ($) {
    $(document).ready(function () {
        window.currentForm = 0;
        $(".multi-form .btn, .steps li").click(function () {
            var li = $(this);
            var liIndex = li.index();
            var btn;
                btn = $(this);
            var currentSection = btn.parents(".section");
            var currentSectionIndex = currentSection.index() - 1;
            window.currentForm = currentSectionIndex;
            var headerSection = $('.steps li').eq(currentSectionIndex);
            currentSection.removeClass("is-active").next().addClass("is-active");
            headerSection.removeClass("is-active").next().addClass("is-active");

            $(".multi-form").submit(function (e) {
                e.preventDefault();
            });

            if (currentSectionIndex === 3) {
                $(document).find(".multi-form .section").first().addClass("is-active");
                $(document).find(".steps li").first().addClass("is-active");
            }
        });
        $('.btnPrevious').click(function(){
            $('.steps > .active').prev('li').find('a').trigger('click');
        });

        // form validation
        'use strict';
        window.addEventListener('load', function() {
            // Get the forms we want to add validation styles to
            var forms = document.getElementsByClassName('multi-form');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('button', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
        $(".participate-btn").click(function() {
            $('html, body').animate({
                scrollTop: $("#form").offset().top-50
            }, 900);
        });
    });
})(jQuery);