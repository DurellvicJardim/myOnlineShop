-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 24, 2021 at 09:40 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mywholeheart`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `subject` varchar(360) NOT NULL,
  `query` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `email`, `fullname`, `subject`, `query`) VALUES
(8, '123@email.com', 'Number Person', '123456789', '12345678910');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `product_code` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `product_featured` tinyint(1) NOT NULL,
  `product_new` tinyint(1) NOT NULL,
  `product_page` varchar(255) NOT NULL,
  `inCart` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `product_code`, `price`, `product_image`, `product_featured`, `product_new`, `product_page`, `inCart`) VALUES
(1, 'Spotify Plaque', 'spotifyplaque', 150, 'spotifyplaque', 1, 0, 'spotifyplaque.html', 0),
(2, 'Keychain', 'keychain', 35, 'keychain', 1, 0, 'keychain.html', 0),
(3, 'Cards', 'cards', 30, 'card', 1, 0, 'card.html', 0),
(4, 'Spotify Keychain', 'spotifykeychain', 35, 'spotifykeychain', 0, 0, 'spotifykeychain.html', 0),
(5, 'Mugs', 'mugs', 70, 'mug', 0, 0, 'mug.html', 0),
(6, 'Glasses', 'glasses', 70, 'glass', 0, 0, 'glass.html', 0),
(7, 'Christmas Bauble', 'christmasbauble', 45, 'christmasbauble', 0, 1, 'christmasbauble.html', 0),
(8, 'Flat Christmas Bauble', 'flatchristmasbauble', 30, 'flatchristmasbauble', 0, 1, 'flatchristmasbauble.html', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `password`, `id`) VALUES
('rob@email.com', '123456789', 1),
('arandomemail@gmail.com', '123456789', 2),
('bob@email.com', '123456789', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
