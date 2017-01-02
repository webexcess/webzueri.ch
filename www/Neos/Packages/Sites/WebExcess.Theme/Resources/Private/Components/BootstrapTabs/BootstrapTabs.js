import $ from 'jquery';


function registerAllNavTabs () {
    let tabsSelector = '.nav-tabs';
    console.log('registerAllNavTabs "' + tabsSelector + '"');

    $(document).on('click', tabsSelector + ' .nav-link', function (e) {
        console.log(this, 'clicked');
        e.preventDefault();

        if ($(this).hasClass('active')) {
            return false;
        }

        let navTabsParent = $(this).parentsUntil('.nav-tabs').parent();

        let oldPaneId = $('.nav-link.active', navTabsParent).attr('href');
        $('.nav-link.active', navTabsParent).removeClass('active');
        $(oldPaneId).removeClass('in').removeClass('active');

        let newPaneId = $(this).attr('href');
        $(this).addClass('active');
        $(newPaneId).addClass('in active');

        return false;
    });
}

export {registerAllNavTabs};
