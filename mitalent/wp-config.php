<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
define('RELOCATE', true);
// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'mitalent_bd');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '6Lt0~g=&`sQT^)|q(ngP2WYU>omE M,k4$J&?E]a1o+1*XDbn,=m3+=gUN%0T^@)');
define('SECURE_AUTH_KEY',  'A_:Z/!hzHJkB:A&:ysAJ7#?r]wJ`W:AW7B#s;$`CYRag^vSj)E:aJ}bJ(R46Cj;U');
define('LOGGED_IN_KEY',    'tKH_fgyl?jUZ56q:,HEdJ_4x/~o-c7v0mypC};Z0_l3K)@Z/{|xE4e0`8l50^mV6');
define('NONCE_KEY',        '^5r~0^2AhA8rV}cq~KCh@;bKI^1 *$fOrl{`6LW(wKX<#Z{yg{DPo&X<i?xXD]=7');
define('AUTH_SALT',        '~psRO.%<dZO#yVB`N9HdB9<Vj/Q6p?]{?mv@m.j:BE[l~`YU!Ig4pk4*oU&>n1b;');
define('SECURE_AUTH_SALT', 'D;1=FqDS]k~pfqfomwTWUrwYY77!zs$Y@YKy.*^H,w_w2VT.,nL5ktk|9U#{<k!0');
define('LOGGED_IN_SALT',   '+Ng2Eg>p=f+V]Tuzk;Iqbo)dhlXMw /|(kp=vVJ>-6bZeam,egr.VcGIK$Rd=lBs');
define('NONCE_SALT',       '%m/r;S9:`6oU1yF[B=]pG1.d<R?nchzsumeFq^|.X^*%B|<N+l=dA<=+FFjS+qaY');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
