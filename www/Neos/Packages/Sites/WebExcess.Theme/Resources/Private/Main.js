
// import {test} from './Components/Test/Test';
// test();

import {watchScrollClicks} from './Components/ScrollClick/ScrollClick';
watchScrollClicks();

import {init as initMobileNav, watchNavToggleClick} from './Components/MobileNav/MobileNav';
initMobileNav('.header-content ul');
watchNavToggleClick('.mobile-nav-toggle');

import {registerAllNavTabs} from './Components/BootstrapTabs/BootstrapTabs';
registerAllNavTabs();
