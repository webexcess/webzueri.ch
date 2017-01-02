import $ from 'jquery';

function watchScrollClicks () {
    console.log('watchScrollClicks registered');

    $(document).on('click', '[href]', function (e) {
        console.log(this, 'clicked');

        let targetSection = $('section[data-node-url="' + this.attributes.href.value + '"]');
        if (targetSection.length > 0) {
            $('html, body').animate({
                scrollTop: targetSection.offset().top
            }, 500);

            e.preventDefault();
            return false;
        }

    });
}

export {watchScrollClicks};
