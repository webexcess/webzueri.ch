import $ from 'jquery';

function init (navSelector) {
    $(function(){
        console.log($(navSelector), 'navSelector "' + navSelector + '" create');
        $('body').append('<div class="mobile-nav-container" />');
        $('.mobile-nav-container').append($(navSelector).clone());
        $(document).on('click', '.mobile-nav-container *, .mobile-nav-container a', function() {
            $('body').removeClass('mobile-nav-active');
        });
    });
}

function watchNavToggleClick (navItemSelector) {
    console.log('watchNavToggleClick registered with "' + navItemSelector + '"');

    $(document).on('click', navItemSelector, function (e) {
        console.log(this, 'clicked');

        $('body').toggleClass('mobile-nav-active');

        e.preventDefault();
        return false;
    });
}

export {init, watchNavToggleClick};
