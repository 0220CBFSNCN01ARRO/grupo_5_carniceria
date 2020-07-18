-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-07-2020 a las 21:20:08
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.2.31

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
(1, 'Vacio', '1', 'kg', '420', '1', 'image-1595098819627.jpg'),
(2, 'Pollo Entero', '3', 'Kg', '100', '1', 'image-1595099549725.jpg'),
(3, 'Pechugas', '3', 'Kg', '55', '1', 'image-1595099603130.jpg'),
(4, 'Patitas', '3', 'Kg', '75', '1', 'image-1595099666400.jpeg'),
(5, 'Costillas', '1', 'Kg', '325', '1', 'image-1595098887886.jpg'),
(6, 'Matambre', '1', 'Kg', '215', '1', 'image-1595098963319.jpg'),
(7, 'Vacio ', '2', 'Kg', '200', '1', 'image-1595099318989.jpg'),
(8, 'Falda', '1', 'Kg', '250', '1', 'image-1595099011928.jpg'),
(9, 'Jamon Redondo', '1', 'Kg', '220', '1', 'image-1595099050743.jpg'),
(10, 'Bifes', '1', 'Kg', '200', '1', 'image-1595099083773.jpg'),
(11, 'Solomillo', '2', 'Kg', '250', '1', 'image-1595099346335.jpg'),
(12, 'Pechito', '2', 'Kg', '275', '1', 'image-1595099377951.jpg');

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
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_icelandic_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `address`, `city`, `state`, `avatar`, `status`) VALUES
(24, 'Pauly', 'Cockrell', 'pcockrellm@g.co', 'TMU9teTkl', '47908 Melby Point', 'Dallas', 'Texas', 'https://robohash.org/etrepellendusearum.png?size=50x50&set=set1', 1),
(25, 'Flemming', 'Bessent', 'fbessentn@163.com', 'E5UxxZFkW', '13776 Maryland Pass', 'San Jose', 'California', 'https://robohash.org/accusantiumfugapraesentium.png?size=50x50&set=set1', 2),
(35, 'Pedro Angel', 'Yapur', 'pedroyapur@gmail.com', '$2b$10$9o9qFWpEG7tS4.WBQ9Hxg.nwhnFvhk5Sai02NVRPii/J2fcGwPmPK', 'calle 1234', 'rosario', 'santa fe', 'avatar-1594830411699.jpg', 2);

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
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `user_product`
--
ALTER TABLE `user_product`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
