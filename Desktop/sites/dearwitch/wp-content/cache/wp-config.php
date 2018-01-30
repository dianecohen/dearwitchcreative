<?php
# Database Configuration
define( 'DB_NAME', 'wp_dearwitch' );
define( 'DB_USER', 'dearwitch' );
define( 'DB_PASSWORD', '4r7Ov8MVgJQTnhNSW4ze' );
define( 'DB_HOST', '127.0.0.1' );
define( 'DB_HOST_SLAVE', '127.0.0.1' );
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', 'utf8_unicode_ci');
$table_prefix = 'wp_';

# Security Salts, Keys, Etc
define('AUTH_KEY',         'ulUGE1j?q^5!f}-cCnL64:aL);PSy?$A?~ xsNL22m@]+^R-FDw>yv+.|cK_rxSf');
define('SECURE_AUTH_KEY',  '6W/=.b3Hf0Y%Q&$9t<UU!ysB#q[NxZzJ+Op.pKr3e`1R $WFTiJfAQ`s;Pr{nLfY');
define('LOGGED_IN_KEY',    '{~cWGT.za K6k{=D1=CoF[r+7Y^[K:J#f!3=p7+?K(G{+u+{%d5a$W(SO}3a^rp#');
define('NONCE_KEY',        'dti&Dr7j-:S9skr7RuqA^Nh2b+8oml==w%hSnc_U>XedI/QDz-d| 238_@6$s|g}');
define('AUTH_SALT',        'w_*<L+:hGf^Z-+HQSP:RH+jdD-kcaz7x+;GiVxG3I9.}Kgm$-HQ1g!_%+pD@5*>[');
define('SECURE_AUTH_SALT', '$KAM1bLPWPx<@>C!!-q3?-bA-9;+QVq{a^Nl>|fE++kxcxs[C!44:pHrhSWNPp))');
define('LOGGED_IN_SALT',   '+#YQDe#|}j$ [|Ii&]@|1W^RQ(&W7~^SrhE/bMkDj;+;Uyr#RW%^|+[7P|KUVQ:.');
define('NONCE_SALT',       'xlkyjReOjB)~2p mNY0v~$cfZBUGDUj_DGWKzb$)}3WT{7lcwIkmYQWen u}nJ&a');


# Localized Language Stuff

define( 'WP_CACHE', TRUE );

define( 'WP_AUTO_UPDATE_CORE', false );

define( 'PWP_NAME', 'dearwitch' );

define( 'FS_METHOD', 'direct' );

define( 'FS_CHMOD_DIR', 0775 );

define( 'FS_CHMOD_FILE', 0664 );

define( 'PWP_ROOT_DIR', '/nas/wp' );

define( 'WPE_APIKEY', '69980fcb12ca76e573fff4738481f720943acdad' );

define( 'WPE_CLUSTER_ID', '120191' );

define( 'WPE_CLUSTER_TYPE', 'pod' );

define( 'WPE_ISP', true );

define( 'WPE_BPOD', false );

define( 'WPE_RO_FILESYSTEM', false );

define( 'WPE_LARGEFS_BUCKET', 'largefs.wpengine' );

define( 'WPE_SFTP_PORT', 2222 );

define( 'WPE_LBMASTER_IP', '' );

define( 'WPE_CDN_DISABLE_ALLOWED', true );

define( 'DISALLOW_FILE_MODS', FALSE );

define( 'DISALLOW_FILE_EDIT', FALSE );

define( 'DISABLE_WP_CRON', false );

define( 'WPE_FORCE_SSL_LOGIN', false );

define( 'FORCE_SSL_LOGIN', false );

/*SSLSTART*/ if ( isset($_SERVER['HTTP_X_WPE_SSL']) && $_SERVER['HTTP_X_WPE_SSL'] ) $_SERVER['HTTPS'] = 'on'; /*SSLEND*/

define( 'WPE_EXTERNAL_URL', false );

define( 'WP_POST_REVISIONS', FALSE );

define( 'WPE_WHITELABEL', 'wpengine' );

define( 'WP_TURN_OFF_ADMIN_BAR', false );

define( 'WPE_BETA_TESTER', false );

umask(0002);

$wpe_cdn_uris=array ( );

$wpe_no_cdn_uris=array ( );

$wpe_content_regexs=array ( );

$wpe_all_domains=array ( 0 => 'dearwitch.wpengine.com', );

$wpe_varnish_servers=array ( 0 => 'pod-120191', );

$wpe_special_ips=array ( 0 => '35.202.139.223', );

$wpe_ec_servers=array ( );

$wpe_largefs=array ( );

$wpe_netdna_domains=array ( );

$wpe_netdna_domains_secure=array ( );

$wpe_netdna_push_domains=array ( );

$wpe_domain_mappings=array ( );

$memcached_servers=array ( );
define('WPLANG','');

# WP Engine ID


# WP Engine Settings






# That's It. Pencils down
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
require_once(ABSPATH . 'wp-settings.php');

$_wpe_preamble_path = null; if(false){}
