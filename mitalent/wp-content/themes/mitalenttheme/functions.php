<?php  

add_action( 'wp_enqueue_scripts', 'style_theme');
add_action( 'wp_enqueue_scripts', 'scripts_theme');
add_action( 'after_setup_theme', 'theme_register_nav_menu');
add_action( 'wp_enqueue_scripts', 'my_scripts' );
add_action( 'init', 'register_post_types' );

add_theme_support( 'post-thumbnails', array( 'post', 'profile' ) );

function register_post_types(){
    register_post_type('profile', array(
        'label'  => null,
        'labels'             => array(
            'name'               => 'profile', // Основное название типа записи
            'singular_name'      => 'profile', // отдельное название записи типа Book
            'add_new'            => 'add profile',
            'add_new_item'       => 'add profile',
            'edit_item'          => 'edit porfile',
            'new_item'           => 'new profile',
            'view_item'          => 'view profile',
            'search_items'       => 'search profile',
            'not_found'          => 'profile not found',
            'not_found_in_trash' => 'profile not found in trash',
            'parent_item_colon'  => '',
            'menu_name'          => 'profile'
        ),
        'description'         => 'our clients',
        'public'              => true,
        'publicly_queryable'  => true, // зависит от public
        'exclude_from_search' => true, // зависит от public
        'show_ui'             => true, // зависит от public
        'show_in_menu'        => true, // показывать ли в меню адмнки
        'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
        'show_in_nav_menus'   => true, // зависит от public
        'show_in_rest'        => true, // добавить в REST API. C WP 4.7
        'rest_base'           => null, // $post_type. C WP 4.7
        'menu_position'       => 4,
        'menu_icon'           => null, 
        //'capability_type'   => 'post',
        //'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
        //'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
        'hierarchical'        => false,
        'supports'            => array('title','editor', 'thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
        'taxonomies'          => array(),
        'has_archive'         => false,
        'rewrite'             => true,
        'query_var'           => true,
    ) );
}




function theme_register_nav_menu(){
	register_nav_menu('top_menu', 'header_nav');
}

function style_theme() {
	wp_enqueue_style('style', get_stylesheet_uri());
	wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/css/main.min.css');
	wp_enqueue_style( 'slick', get_template_directory_uri() . '/assets/libs/slick-carousel/slick/slick.css');
	wp_enqueue_style( 'slicktheme', get_template_directory_uri() . '/assets/libs/slick-carousel/slick/slick-theme.css');
}


function scripts_theme() {
	wp_enqueue_script('scripts', get_template_directory_uri() . '/assets/js/scripts.min.js');
	wp_enqueue_script('slick', get_template_directory_uri() . '/assets/libs/slick-carousel/slick/slick.min.js');
	wp_enqueue_script('jquery', get_template_directory_uri() . '/assets/libs/jquery/dist/jquery.min.js');	
}




function my_scripts() {
    $link = get_permalink($post->post_parent);
    if ( is_page( 36 ) ) {   
    //подключаем скрипт для страницы новостей
    	wp_enqueue_script('scripts-news', get_template_directory_uri() . '/assets/js/news-page.js');
    } else if ( is_page( 23 ) ) {   
    //подключаем скрипт для страницы новостей
    	wp_enqueue_script('scripts-about', get_template_directory_uri() . '/assets/js/about-page.js');
    } else if ( is_page( 39 ) ) {   
    //подключаем скрипт для страницы новостей
        wp_enqueue_script('scripts-clients', get_template_directory_uri() . '/assets/js/clients-page.js');
    } else if ( is_page( 28 ) ) {   
    //подключаем скрипт для страницы новостей
        wp_enqueue_script('scripts-contact', get_template_directory_uri() . '/assets/js/contact-page.js');
    } else if(preg_match("/profile/", $link)) {  
         wp_enqueue_script('scripts-profile', get_template_directory_uri() . '/assets/js/profile-page.js');       
    } else {
         wp_enqueue_script('scripts-home', get_template_directory_uri() . '/assets/js/home-page.js');       
    }

}

