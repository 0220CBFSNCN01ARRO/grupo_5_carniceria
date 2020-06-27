-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 27-06-2020 a las 20:55:30
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `meatme`
--
CREATE DATABASE IF NOT EXISTS `meatme` DEFAULT CHARACTER SET utf8 COLLATE utf8_icelandic_ci;
USE `meatme`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8_icelandic_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_icelandic_ci;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Vacuno'),
(2, 'Cerdo'),
(3, 'Pollo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `items`
--

CREATE TABLE `items` (
  `id` int(11) UNSIGNED NOT NULL,
  `products_id` int(11) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `orders_id` int(11) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8_icelandic_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_icelandic_ci;

--
-- Volcado de datos para la tabla `items`
--

INSERT INTO `items` (`id`, `products_id`, `quantity`, `price`, `orders_id`, `name`) VALUES
(2, 64, 8, '446', 19, 'Pate - Peppercorn'),
(3, 64, 7, '214', 23, 'Cape Capensis - Fillet'),
(4, 65, 3, '106', 21, 'Tomatillo'),
(5, 72, 8, '428', 24, 'Sausage - Breakfast'),
(6, 68, 4, '493', 4, 'Bread - Multigrain, Loaf'),
(7, 73, 7, '69', 38, 'Soup - Base Broth Chix'),
(8, 81, 4, '437', 21, 'Shrimp - Black Tiger 13/15'),
(9, 73, 5, '287', 14, 'Mangostein'),
(10, 65, 6, '250', 39, 'Veal - Knuckle'),
(11, 77, 5, '214', 47, 'Quail - Jumbo'),
(12, 61, 3, '93', 4, 'Corn - Mini'),
(13, 60, 5, '158', 37, 'Cloves - Whole'),
(14, 86, 1, '215', 48, 'Langers - Ruby Red Grapfruit'),
(15, 87, 3, '56', 27, 'Gin - Gilbeys London, Dry'),
(16, 63, 2, '9', 19, 'Apple - Macintosh'),
(17, 68, 8, '313', 25, 'Bread - Pullman, Sliced'),
(18, 64, 7, '210', 24, 'Lettuce - Belgian Endive'),
(19, 64, 5, '355', 17, 'Muffin Mix - Blueberry'),
(20, 74, 7, '295', 3, 'Kaffir Lime Leaves'),
(21, 70, 8, '67', 4, 'Muffin - Mix - Mango Sour Cherry'),
(22, 87, 3, '91', 12, 'Dip - Tapenade'),
(23, 87, 6, '73', 41, 'Wine - Cahors Ac 2000, Clos'),
(24, 79, 9, '86', 33, 'Parsley Italian - Fresh'),
(25, 87, 4, '288', 31, 'Chocolate - Sugar Free Semi Choc'),
(26, 70, 6, '304', 23, 'Bagels Poppyseed'),
(27, 82, 3, '135', 4, 'Bread - Italian Corn Meal Poly'),
(28, 82, 3, '296', 41, 'Water - Perrier'),
(29, 64, 7, '151', 30, 'Higashimaru Usukuchi Soy'),
(30, 76, 10, '238', 10, 'Cream - 35%');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) UNSIGNED NOT NULL,
  `items_id` int(11) UNSIGNED NOT NULL,
  `users_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_icelandic_ci;

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`id`, `items_id`, `users_id`) VALUES
(1, 1, 1),
(2, 5, 1),
(3, 4, 9),
(4, 3, 3),
(5, 8, 28),
(6, 16, 23),
(7, 13, 19),
(8, 6, 12),
(9, 2, 14),
(10, 26, 5),
(11, 24, 5),
(12, 29, 23),
(13, 13, 27),
(14, 13, 7),
(15, 27, 13),
(16, 15, 18),
(17, 4, 4),
(18, 16, 24),
(19, 23, 3),
(20, 13, 20),
(21, 15, 13),
(22, 7, 9),
(23, 26, 3),
(24, 9, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8_icelandic_ci DEFAULT NULL,
  `category_id` varchar(50) COLLATE utf8_icelandic_ci DEFAULT NULL,
  `type` varchar(50) COLLATE utf8_icelandic_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8_icelandic_ci DEFAULT NULL,
  `weight` decimal(11,0) DEFAULT NULL,
  `image` varchar(50) COLLATE utf8_icelandic_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_icelandic_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `category_id`, `type`, `price`, `weight`, `image`) VALUES
(60, 'Pasta - Bauletti, Chicken White', '1', 'F', '107', '1', NULL),
(61, 'Roe - Lump Fish, Red', '3', 'M', '194', '2', NULL),
(62, 'Trout Rainbow Whole', '3', 'F', '186', '3', NULL),
(63, 'Ecolab Crystal Fusion', '3', 'F', '345', '4', NULL),
(64, 'Ice Cream Bar - Hageen Daz To', '1', 'F', '325', '5', NULL),
(65, 'Milk - Condensed', '1', 'F', '215', '6', NULL),
(66, 'Foil Cont Round', '3', 'F', '342', '7', NULL),
(67, 'Muffin Hinge Container 6', '2', 'F', '94', '8', NULL),
(68, 'Ecolab Silver Fusion', '3', 'F', '324', '9', NULL),
(69, 'Samosa - Veg', '1', 'F', '224', '10', NULL),
(70, 'Wine - Cotes Du Rhone', '1', 'F', '26', '11', NULL),
(71, 'Cheese - Shred Cheddar / Mozza', '3', 'F', '374', '12', NULL),
(72, 'Everfresh Products', '1', 'M', '19', '13', NULL),
(73, 'Oven Mitts - 15 Inch', '1', 'M', '224', '14', NULL),
(74, 'Lemon Tarts', '3', 'M', '383', '15', NULL),
(75, 'Flavouring Vanilla Artificial', '3', 'M', '399', '16', NULL),
(76, 'Bar - Sweet And Salty Chocolate', '2', 'F', '40', '17', NULL),
(77, 'Yogurt - Peach, 175 Gr', '2', 'F', '392', '18', NULL),
(78, 'Cranberries - Fresh', '2', 'F', '245', '19', NULL),
(79, 'Flower - Daisies', '2', 'F', '372', '20', NULL),
(80, 'Dried Peach', '1', 'F', '302', '21', NULL),
(81, 'Eel - Smoked', '1', 'F', '107', '22', NULL),
(82, 'Appetizer - Escargot Puff', '3', 'F', '385', '23', NULL),
(83, 'Oil - Pumpkinseed', '2', 'M', '289', '24', NULL),
(84, 'The Pop Shoppe - Lime Rickey', '2', 'F', '271', '25', NULL),
(85, 'Shrimp, Dried, Small / Lb', '3', 'F', '212', '26', NULL),
(86, 'Crush - Cream Soda', '1', 'M', '329', '27', NULL),
(87, 'Persimmons', '2', 'M', '132', '28', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `first_name` varchar(50) COLLATE utf8_icelandic_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8_icelandic_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(200) COLLATE utf8_icelandic_ci NOT NULL,
  `city` varchar(100) COLLATE utf8_icelandic_ci NOT NULL,
  `state` varchar(100) COLLATE utf8_icelandic_ci NOT NULL,
  `avatar` varchar(100) COLLATE utf8_icelandic_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_icelandic_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `address`, `city`, `state`, `avatar`, `status`) VALUES
(1, 'Ramiro', 'Mazzucco', 'ramazzucco@hotmail.com', 'ramiro', 'av. alberdi 600', 'Rosario', 'Santa Fe', '', 0),
(2, 'Goober', 'Powell', 'gpowell0@geocities.com', 'Do97ztuGesG', '1 7th Plaza', 'Pittsburgh', 'Pennsylvania', 'https://robohash.org/architectoaspernaturea.png?size=50x50&set=set1', 1),
(3, 'Venita', 'Vater', 'vvater1@huffingtonpost.com', 't15FRgk', '0832 Birchwood Way', 'Phoenix', 'Arizona', 'https://robohash.org/aliquamrepudiandaesed.png?size=50x50&set=set1', 0),
(4, 'Shelia', 'Whitsey', 'swhitsey2@patch.com', 'uquGWvW6juiq', '163 Victoria Parkway', 'San Francisco', 'California', 'https://robohash.org/saepesapienteid.png?size=50x50&set=set1', 2),
(5, 'Sindee', 'Urquhart', 'surquhart3@flickr.com', '2zwNVuNKFO', '8847 Messerschmidt Street', 'Saint Petersburg', 'Florida', 'https://robohash.org/accusamusnostrumalias.png?size=50x50&set=set1', 1),
(6, 'Link', 'Moatt', 'lmoatt4@de.vu', 'mWEl2SQD', '10905 Portage Place', 'Trenton', 'New Jersey', 'https://robohash.org/estullamsoluta.png?size=50x50&set=set1', 1),
(7, 'Valeria', 'Toye', 'vtoye5@phpbb.com', 'js5hrcvIz', '38 Dixon Trail', 'Daytona Beach', 'Florida', 'https://robohash.org/consequaturofficiaut.png?size=50x50&set=set1', 0),
(8, 'Cordell', 'Charlewood', 'ccharlewood6@globo.com', 'hvdbDbOf', '59 Warbler Drive', 'Chico', 'California', 'https://robohash.org/estvoluptatemreiciendis.png?size=50x50&set=set1', 1),
(9, 'Johnna', 'Shippam', 'jshippam7@parallels.com', 'Z5TUPdHuVMp', '17 Messerschmidt Parkway', 'Lehigh Acres', 'Florida', 'https://robohash.org/eosvoluptasnecessitatibus.png?size=50x50&set=set1', 1),
(10, 'Briana', 'Maro', 'bmaro8@foxnews.com', 'zbp9YKTGF8Kh', '3717 Johnson Crossing', 'Chattanooga', 'Tennessee', 'https://robohash.org/cupiditateremaccusantium.png?size=50x50&set=set1', 1),
(11, 'Bob', 'Bunny', 'bbunny9@webnode.com', 'LrZuaaQXD', '51 Kropf Way', 'Houston', 'Texas', 'https://robohash.org/quisquamvelvoluptatem.png?size=50x50&set=set1', 1),
(12, 'Augustine', 'Chambers', 'achambersa@homestead.com', 'ioJvidelUAuf', '3 Mesta Lane', 'Washington', 'District of Columbia', 'https://robohash.org/aliquidmagnamveritatis.png?size=50x50&set=set1', 1),
(13, 'Doro', 'Sitch', 'dsitchb@mozilla.com', 'hhrRL25F48iC', '0431 Burrows Way', 'Atlanta', 'Georgia', 'https://robohash.org/necessitatibusodioab.png?size=50x50&set=set1', 1),
(14, 'Rik', 'Heed', 'rheedc@wikimedia.org', '6lSr6Jda', '1757 Havey Avenue', 'Evansville', 'Indiana', 'https://robohash.org/nihilquilibero.png?size=50x50&set=set1', 1),
(15, 'Timi', 'Gobourn', 'tgobournd@indiegogo.com', '6sJXio1Dq9', '871 Burning Wood Hill', 'Brooklyn', 'New York', 'https://robohash.org/dictainventorevoluptas.png?size=50x50&set=set1', 2),
(16, 'Daveta', 'McGarrahan', 'dmcgarrahane@google.ru', 'KTFNthvCIdGF', '796 Namekagon Way', 'Topeka', 'Kansas', 'https://robohash.org/velexcepturieum.png?size=50x50&set=set1', 1),
(17, 'Husein', 'Tolumello', 'htolumellof@drupal.org', 'aE7GHLa', '8682 Declaration Drive', 'Phoenix', 'Arizona', 'https://robohash.org/etexplicabovero.png?size=50x50&set=set1', 2),
(18, 'Ginger', 'Howel', 'ghowelg@tiny.cc', 'R8IwkMFF', '821 Hudson Junction', 'New York City', 'New York', 'https://robohash.org/animiquaequaerat.png?size=50x50&set=set1', 1),
(19, 'Stephie', 'Pratte', 'spratteh@wikipedia.org', 'DJWgyOm', '29 Norway Maple Trail', 'Pompano Beach', 'Florida', 'https://robohash.org/estconsequaturquae.png?size=50x50&set=set1', 2),
(20, 'Kellby', 'Yanyushkin', 'kyanyushkini@tinyurl.com', 'RberHVKQ', '9 Buell Avenue', 'Austin', 'Texas', 'https://robohash.org/laborumnihilinventore.png?size=50x50&set=set1', 1),
(21, 'Odell', 'Menelaws', 'omenelawsj@prweb.com', '1JxIbcxS', '329 Helena Crossing', 'Saint Paul', 'Minnesota', 'https://robohash.org/earumanostrum.png?size=50x50&set=set1', 1),
(22, 'Berthe', 'Roddan', 'broddank@t-online.de', 'yH6T8KGFx', '834 Annamark Point', 'Omaha', 'Nebraska', 'https://robohash.org/repellatquosqui.png?size=50x50&set=set1', 1),
(23, 'Katherina', 'Stuart', 'kstuartl@flickr.com', 'QaeSSeFaq', '188 Lakewood Drive', 'Albany', 'New York', 'https://robohash.org/voluptatemoditsed.png?size=50x50&set=set1', 0),
(24, 'Pauly', 'Cockrell', 'pcockrellm@g.co', 'TMU9teTkl', '47908 Melby Point', 'Dallas', 'Texas', 'https://robohash.org/etrepellendusearum.png?size=50x50&set=set1', 1),
(25, 'Flemming', 'Bessent', 'fbessentn@163.com', 'E5UxxZFkW', '13776 Maryland Pass', 'San Jose', 'California', 'https://robohash.org/accusantiumfugapraesentium.png?size=50x50&set=set1', 2),
(26, 'Mimi', 'Happs', 'mhappso@shinystat.com', '0M8YMAEd', '4347 Pleasure Park', 'Shawnee Mission', 'Kansas', 'https://robohash.org/suntdolorumculpa.png?size=50x50&set=set1', 1),
(27, 'Lois', 'Drabble', 'ldrabblep@phoca.cz', 'v1cq7o7', '90 Mesta Pass', 'Austin', 'Texas', 'https://robohash.org/nonnostrumenim.png?size=50x50&set=set1', 1),
(28, 'Cookie', 'Quipp', 'cquippq@ox.ac.uk', 'AlqbxZ6nUP6', '78 Lunder Junction', 'Fort Pierce', 'Florida', 'https://robohash.org/quaedictaipsum.png?size=50x50&set=set1', 0),
(29, 'Scotty', 'Murkitt', 'smurkittr@webnode.com', 'ZAuvwWhgzVSS', '626 Bellgrove Way', 'Winston Salem', 'North Carolina', 'https://robohash.org/ipsumvellaboriosam.png?size=50x50&set=set1', 2),
(30, 'Adaline', 'Fowley', 'afowleys@sbwire.com', 'VfOvP4E', '2595 Rusk Court', 'Johnstown', 'Pennsylvania', 'https://robohash.org/rationesuscipitsit.png?size=50x50&set=set1', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_product`
--

CREATE TABLE `user_product` (
  `id` int(11) UNSIGNED NOT NULL,
  `products_id` int(11) UNSIGNED NOT NULL,
  `users_id` int(11) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_icelandic_ci;

--
-- Volcado de datos para la tabla `user_product`
--

INSERT INTO `user_product` (`id`, `products_id`, `users_id`, `quantity`) VALUES
(2, 68, 10, 2),
(3, 70, 5, 5),
(4, 73, 12, 10),
(5, 76, 9, 10),
(6, 66, 2, 5),
(7, 84, 24, 5),
(8, 72, 26, 3),
(9, 61, 5, 5),
(10, 75, 28, 9),
(11, 61, 18, 4),
(12, 73, 11, 2),
(13, 70, 22, 0),
(14, 76, 13, 6),
(15, 85, 18, 3),
(16, 62, 10, 9),
(17, 64, 10, 4),
(18, 66, 29, 2),
(19, 72, 8, 6),
(20, 83, 15, 8),
(21, 80, 22, 4),
(22, 69, 30, 4),
(23, 62, 28, 6),
(24, 87, 18, 5),
(25, 68, 15, 4),
(26, 76, 9, 6),
(27, 74, 10, 9),
(28, 63, 26, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`orders_id`),
  ADD KEY `product_id` (`products_id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `items_id` (`items_id`),
  ADD KEY `user_id` (`users_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categorias_id` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_product`
--
ALTER TABLE `user_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`products_id`),
  ADD KEY `user_id` (`users_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `user_product`
--
ALTER TABLE `user_product`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
