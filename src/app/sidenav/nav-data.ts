import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    { 
        routelink: 'dashboard',
        icon: 'fa fa-home',
        label: 'Dashboard'
    },
    { 
        routelink: 'products',
        icon: 'fa fa-box-open',
        label: 'Products',
        items: [
            { 
                routelink: 'products/level1.1',
                label: 'Level 1.1',
                items: [
                    { 
                        routelink: 'products/level2.1',
                        label: 'Level 2.1'
                    },
                    { 
                        routelink: 'products/level2.2',
                        label: 'Level 2.2',
                        items: [
                            { 
                                routelink: 'products/level3.1',
                                label: 'Level 3.1'
                            },
                            { 
                                routelink: 'products/level3.2',
                                label: 'Level 3.2'
                            },
                        ]
                    },
                ]
            },
            { 
                routelink: 'products/level1.2',
                label: 'Level 1.2'
            },
        ]
    },
    { 
        routelink: 'statistics',
        icon: 'fa fa-chart-bar',
        label: 'Statistics'
    },
    { 
        routelink: 'coupons',
        icon: 'fa fa-tags',
        label: 'Coupons',
        items: [
            { 
                routelink: 'coupons/list',
                label: 'List Coupons'
            },
            { 
                routelink: 'coupons/create',
                label: 'Create Coupons'
            },
        ]
    },
    { 
        routelink: 'pages',
        icon: 'fa fa-file',
        label: 'Pages'
    },
    { 
        routelink: 'media',
        icon: 'fa fa-camera',
        label: 'Media'
    },
    { 
        routelink: 'settings',
        icon: 'fa fa-cog',
        label: 'Settings',
        expanded: true,
        items: [
            { 
                routelink: 'settings/profile',
                label: 'Profile'
            },
            { 
                routelink: 'settings/customize',
                label: 'Customize'
            },
        ]
    },
]