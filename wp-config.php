<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //


// if (strstr($_SERVER['SERVER_NAME'], 'smaos.local')) {
// 	/** The name of the database for WordPress */
// 	define( 'DB_NAME', 'local' );

// 	/** MySQL database username */
// 	define( 'DB_USER', 'root' );
	
// 	/** MySQL database password */
// 	define( 'DB_PASSWORD', 'root' );
	
// 	/** MySQL hostname */
// 	define( 'DB_HOST', 'localhost' );
// } else {
	/** The name of the database for WordPress */
	define('DB_NAME', 'ichardy4_WPFQ4');

	/** MySQL database username */
	define('DB_USER', 'ichardy4_WPFQ4');

	/** MySQL database password */
	define('DB_PASSWORD', 'K3KZ=c=)o_2o8ZDq4');

	/** MySQL hostname */
	define('DB_HOST', 'localhost');
// }



/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'D1N8axMfKBtNz9QTfebvthjrhwWGzg+oBxmEW0AcVbu2ErBXV81X3jEOeyMOXa834uH8M5jEBy5JoEj11/sBRg==');
define('SECURE_AUTH_KEY',  'Wv6pLw2ozq6bBnRywM+KDn1DE3Ho68WopnsIHWG3PKWciq56HuwmlkBe6hH04p1ydasXG7x9mz9+q1gsHl7fUA==');
define('LOGGED_IN_KEY',    'hOrTY4iz0pISKiuhuhoicajpczst63h1HryW4xTp3crUyVqV/pfwVuFF6pHOiElH70nMINnA4wZi61c1LIcYcg==');
define('NONCE_KEY',        'k8g5VHeczA5WEraQO76d4JacbwIHeGFlLj6kwiRir/a/9rQ3P0P2tXk4VuONz2xay6Eci+5b23NdBQBKzaaerg==');
define('AUTH_SALT',        'CHbuGPegMpshy6ttW6Aor9/OxuXSSfXpAR9KCxtyDheqVKQ9MsjcOPnny2O6TItUUieRrm7yeDfkuT8AYZSg4w==');
define('SECURE_AUTH_SALT', 'TZWOYwj079OA4RTRuzXlbcsqJ2Bns3fCjgUdFlh7R+IEXN06whjDdu4Btd8LrX++BNRxySwz5pk977MajESW2Q==');
define('LOGGED_IN_SALT',   'CIDhBZTIwPJq/HzRG9CPv6jD88+gxkpiH5duuCXJQ652VHfXYA/h/y3WRkm14HebJj97vkQXwHoHBxSr+uovgw==');
define('NONCE_SALT',       'ids7azerR6qJ6P6AkjXFrAy53+TtHbh4okwZPFlvVRY9Bvg54sD8MPcR2Dy/AhlEy2p6O9xaPS7h3SKXqWOlrQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
