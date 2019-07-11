// default list filter
initApp.listFilter($('#js_default_list'), $('#js_default_list_filter'));
// custom response message
initApp.listFilter($('#js-list-msg'), $('#js-list-msg-filter'));
//accordion filter
initApp.listFilter($('#js_list_accordion'), $('#js_list_accordion_filter'));
// nested list filter
initApp.listFilter($('#js_nested_list'), $('#js_nested_list_filter'));
//init navigation
initApp.buildNavigation($('#js_nested_list'));