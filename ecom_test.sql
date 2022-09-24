-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2022 at 04:11 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecom_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `ads`
--

CREATE TABLE `ads` (
  `id` int(11) NOT NULL,
  `picture_url` varchar(255) DEFAULT NULL,
  `seller_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ads`
--

INSERT INTO `ads` (`id`, `picture_url`, `seller_id`) VALUES
(1, NULL, 5),
(2, 'dhfksjfhsk', 2),
(3, 'dhfksjfhsk', 2),
(4, 'pssstt', 2);

-- --------------------------------------------------------

--
-- Table structure for table `banned_users`
--

CREATE TABLE `banned_users` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `banned_users`
--

INSERT INTO `banned_users` (`user_id`) VALUES
(4);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sellers_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `sellers_id`) VALUES
(1, 'Laptops', 2),
(3, 'phones', 5),
(4, 'phones', 2),
(5, 'car', 6),
(6, 'car', 7),
(7, 'car', 7),
(8, 'pets', 2),
(10, 'jj', 2),
(11, 'food', 2);

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `code` int(11) NOT NULL,
  `discount_percent` varchar(255) DEFAULT NULL,
  `products_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `discounts`
--

INSERT INTO `discounts` (`code`, `discount_percent`, `products_id`) VALUES
(1236, '25', 2),
(1254, '25', 1),
(12564, '25', 1),
(123698, 'dkh', 1);

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `users_id` int(11) NOT NULL,
  `products_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`users_id`, `products_id`) VALUES
(4, 1),
(4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `lotteries`
--

CREATE TABLE `lotteries` (
  `random_number` int(3) NOT NULL,
  `id_match_one` int(11) DEFAULT NULL,
  `id_match_two` int(11) NOT NULL,
  `id_match_three` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lotteries`
--

INSERT INTO `lotteries` (`random_number`, `id_match_one`, `id_match_two`, `id_match_three`) VALUES
(370, -1, -1, -1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `picture_url` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `categories_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `picture_url`, `price`, `categories_id`) VALUES
(1, 'HP Essential', '', '250', 1),
(2, 'lenovo', NULL, '1000', 1),
(4, 'a70', NULL, '100', 3),
(5, 'A31', NULL, '130', 3),
(6, 'acer', NULL, '1100', 1),
(7, 'p30 lite', NULL, '200', 3),
(8, 'P30 pro', NULL, '900', 3),
(9, 'cat', NULL, '100', 8),
(16, 'madyan', NULL, '200', 3),
(17, 'madyan', 'dfhdbj', '150', 3),
(18, 'madyan', 'dfhdbj', '150', 3),
(19, 'madyan', 'dfhdbj', '150', 3);

-- --------------------------------------------------------

--
-- Table structure for table `reset`
--

CREATE TABLE `reset` (
  `reset_url` varchar(300) NOT NULL DEFAULT '',
  `user_id` int(11) NOT NULL,
  `is_reset` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reset`
--

INSERT INTO `reset` (`reset_url`, `user_id`, `is_reset`) VALUES
('http://127.0.0.1:5500/client-frontend/reset-password.html?resetJwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywibmFtZSI6IlRlc3QiLCJlbWFpbCI6InJhbWkuMy5yb3VoYW5hQGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6IkFkbWluIiwiYmFubmVkIjp0cnVlLCJleHAiOjE2NjQwMjIyNjd9.jBjHR98_EGvpLwZWABjZNVSfiNyQVBr22xUJCHGaHBc', 7, 0),
('http://127.0.0.1:5500/client-frontend/reset-password.html?resetJwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywibmFtZSI6IlRlc3QiLCJlbWFpbCI6InJhbWkuMy5yb3VoYW5hQGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6IkFkbWluIiwiYmFubmVkIjp0cnVlLCJleHAiOjE2NjQwMjIyOTF9.etc-8DqJMvJtmudphRJOoiuT_Qjux5OGPYmJHb2PRog', 7, 0),
('http://127.0.0.1:5500/client-frontend/reset-password.html?resetJwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywibmFtZSI6IlRlc3QiLCJlbWFpbCI6InJhbWkuMy5yb3VoYW5hQGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6IkFkbWluIiwiYmFubmVkIjp0cnVlLCJleHAiOjE2NjQwMjIzNDd9.2jkimAWN8bxJ1bZ0xtj37axzLAnPeo-y2UEgqcIm728', 7, 0),
('http://127.0.0.1:5500/client-frontend/reset-password.html?resetJwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywibmFtZSI6IlRlc3QiLCJlbWFpbCI6InRlc3QiLCJ1c2VyX3R5cGUiOiJBZG1pbiIsImJhbm5lZCI6dHJ1ZSwiZXhwIjoxNjY0MDIyMDY2fQ.wP1UZVHktxIjqFR8Pg74GV-HRlHK1wCSuk6GB0_e5eU', 7, 0),
('http://127.0.0.1:5500/client-frontend/reset-password.html?resetJwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywibmFtZSI6IlRlc3QiLCJlbWFpbCI6InRlc3QiLCJ1c2VyX3R5cGUiOiJBZG1pbiIsImJhbm5lZCI6dHJ1ZSwiZXhwIjoxNjY0MDIyMTA2fQ.tf6KtI_-3dFEVm4obGacM2QXh3n1ek-23sUWWdzPXX0', 7, 0),
('http://127.0.0.1:5500/client-frontend/reset-password.html?resetJwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywibmFtZSI6IlRlc3QiLCJlbWFpbCI6InRlc3RAdGVzdC5zIiwidXNlcl90eXBlIjoiQWRtaW4iLCJiYW5uZWQiOnRydWUsImV4cCI6MTY2NDAyMjE1Nn0.GXlMkEVcElZwPTxtpOOsbOfXLyKHzpjzsOmrc0syT90', 7, 0),
('http://127.0.0.1:5500/client-frontend/reset-password.html?resetJwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywibmFtZSI6IlRlc3QiLCJlbWFpbCI6InRlc3RAdGVzdC5zIiwidXNlcl90eXBlIjoiQWRtaW4iLCJiYW5uZWQiOnRydWUsImV4cCI6MTY2NDAyMjEyOH0.9E3YKEUL2vuFisiKNUJfyZSv_I2plug5nFj4G-4qhEM', 7, 0),
('http://127.0.0.1:5500/client-frontend/reset-password.html?resetJwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywibmFtZSI6IlRlc3QiLCJlbWFpbCI6InRlc3RAdGVzdC5zIiwidXNlcl90eXBlIjoiQWRtaW4iLCJiYW5uZWQiOnRydWUsImV4cCI6MTY2NDAyMjIwMX0.ik--BkTbc8Ewufm31QaF0PXRRk7x4sEHDAB3aUOUX6U', 7, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sold_product`
--

CREATE TABLE `sold_product` (
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `discout_used` tinyint(1) DEFAULT NULL,
  `products_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sold_product`
--

INSERT INTO `sold_product` (`date`, `discout_used`, `products_id`, `users_id`) VALUES
('2022-09-21 00:00:00', 0, 2, 4),
('2022-09-24 15:34:05', 0, 5, 4),
('2022-09-24 16:26:52', 0, 7, 16);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `f_name` varchar(255) DEFAULT NULL,
  `l_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_type` varchar(255) NOT NULL DEFAULT 'Client'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `f_name`, `l_name`, `email`, `password`, `user_type`) VALUES
(1, 'asd', 'Group Limited', 'asd', '688787d8ff144c502c7f5cffaafe2cc588d86079f9de88304c26b0cb99ce91c6', 'Seller'),
(2, 'HP', 'HAWARD', 'hp@gmail.com', 'password', 'Seller'),
(3, 'Admin', NULL, 'admin@gmail.com', 'password', 'Admin'),
(4, 'maytham', 'ghaly', 'maythamghaly@gmail.com', '123123', 'Client'),
(5, 'samsung', 'samsung', 'samsung@gmail.com', 'samsung123', 'Seller'),
(6, 'huawei', 'huawei', 'huawei@huawei.com', 'huawei123', 'Seller'),
(7, 'Test', 'test', 'rami.3.rouhana@gmail.com', 'ssss', 'Admin'),
(15, 'rami', 'abo 3aj2a', 'rami@gmail.com', 'a320480f534776bddb5cdb54b1e93d210a3c7d199e80a23c1b2178497b184c76', 'Client'),
(16, 'rami', 'abo 3aj2a', '', 'a320480f534776bddb5cdb54b1e93d210a3c7d199e80a23c1b2178497b184c76', 'Client');

-- --------------------------------------------------------

--
-- Table structure for table `user_types`
--

CREATE TABLE `user_types` (
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_types`
--

INSERT INTO `user_types` (`type`) VALUES
('Admin'),
('Client'),
('Seller');

-- --------------------------------------------------------

--
-- Table structure for table `vouchers`
--

CREATE TABLE `vouchers` (
  `code` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `used` tinyint(1) NOT NULL DEFAULT 0,
  `client_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vouchers`
--

INSERT INTO `vouchers` (`code`, `amount`, `used`, `client_id`) VALUES
('1253', 100, 0, 4);

-- --------------------------------------------------------

--
-- Table structure for table `whishlist`
--

CREATE TABLE `whishlist` (
  `users_id` int(11) NOT NULL,
  `products_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `whishlist`
--

INSERT INTO `whishlist` (`users_id`, `products_id`) VALUES
(1, 1),
(4, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_ads_users1` (`seller_id`);

--
-- Indexes for table `banned_users`
--
ALTER TABLE `banned_users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD KEY `fk_user_id` (`user_id`),
  ADD KEY `fk_product_id` (`product_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sellers_id` (`sellers_id`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`code`),
  ADD KEY `fk_discount_products1` (`products_id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`users_id`,`products_id`),
  ADD KEY `fk_users_has_products_products1` (`products_id`);

--
-- Indexes for table `lotteries`
--
ALTER TABLE `lotteries`
  ADD PRIMARY KEY (`random_number`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_category_id` (`categories_id`);

--
-- Indexes for table `reset`
--
ALTER TABLE `reset`
  ADD PRIMARY KEY (`reset_url`);

--
-- Indexes for table `sold_product`
--
ALTER TABLE `sold_product`
  ADD PRIMARY KEY (`date`,`products_id`),
  ADD KEY `fk_sold_product_products1` (`products_id`),
  ADD KEY `fk_sold_product_users1` (`users_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_users_user_types1` (`user_type`);

--
-- Indexes for table `user_types`
--
ALTER TABLE `user_types`
  ADD PRIMARY KEY (`type`);

--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`code`),
  ADD KEY `fk_clientID` (`client_id`);

--
-- Indexes for table `whishlist`
--
ALTER TABLE `whishlist`
  ADD PRIMARY KEY (`users_id`,`products_id`),
  ADD KEY `fk_users_has_products1_products1` (`products_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ads`
--
ALTER TABLE `ads`
  ADD CONSTRAINT `fk_ads_users1` FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `banned_users`
--
ALTER TABLE `banned_users`
  ADD CONSTRAINT `fk_userID` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `fk_sellers_id` FOREIGN KEY (`sellers_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `discounts`
--
ALTER TABLE `discounts`
  ADD CONSTRAINT `fk_discount_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `fk_users_has_products_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_products_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_category_id` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `sold_product`
--
ALTER TABLE `sold_product`
  ADD CONSTRAINT `fk_sold_product_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_sold_product_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_user_types1` FOREIGN KEY (`user_type`) REFERENCES `user_types` (`type`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD CONSTRAINT `fk_clientID` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `whishlist`
--
ALTER TABLE `whishlist`
  ADD CONSTRAINT `fk_users_has_products1_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_products1_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
