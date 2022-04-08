-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2022 at 11:33 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appoiment_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `appoinment_record`
--

CREATE TABLE `appoinment_record` (
  `id` int(11) NOT NULL,
  `franchise_id` tinyint(4) DEFAULT NULL,
  `user_id` tinyint(4) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time_period` varchar(20) DEFAULT NULL,
  `time` time DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appoinment_record`
--

INSERT INTO `appoinment_record` (`id`, `franchise_id`, `user_id`, `date`, `time_period`, `time`, `created_at`, `updated_at`) VALUES
(1, 1, 7, '2022-04-08', '09:00 AM - 09:30 AM', '09:00:00', '2022-04-08 07:46:49', '2022-04-08 07:46:49'),
(2, 1, 10, '2022-04-08', '14:30 PM - 15:00 PM', '14:30:00', '2022-04-08 07:47:20', '2022-04-08 07:47:20'),
(3, 2, 9, '2022-04-08', '11:00 AM - 11:30 AM', '11:00:00', '2022-04-08 07:47:59', '2022-04-08 07:47:59');

-- --------------------------------------------------------

--
-- Table structure for table `appointed_client`
--

CREATE TABLE `appointed_client` (
  `id` tinyint(4) NOT NULL,
  `appoinment_record_id` int(11) NOT NULL,
  `franchise_id` tinyint(4) DEFAULT NULL,
  `user_id` tinyint(4) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `reference` varchar(30) DEFAULT NULL,
  `created_by` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointed_client`
--

INSERT INTO `appointed_client` (`id`, `appoinment_record_id`, `franchise_id`, `user_id`, `name`, `contact`, `reference`, `created_by`, `updated_by`) VALUES
(1, 0, 1, 7, 'test', '8465321231', 'Tarun', '2022-04-08 07:46:49', '2022-04-08 07:46:49'),
(2, 0, 1, 10, 'Abhijeet', '9876453211', 'Tarun', '2022-04-08 07:47:21', '2022-04-08 07:47:21'),
(3, 0, 2, 9, 'vaibhav', '9876516132', 'Tarun', '2022-04-08 07:47:59', '2022-04-08 07:47:59');

-- --------------------------------------------------------

--
-- Table structure for table `appointment_manage`
--

CREATE TABLE `appointment_manage` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time_period` varchar(20) DEFAULT NULL,
  `time` time DEFAULT NULL,
  `is_available` tinyint(1) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointment_manage`
--

INSERT INTO `appointment_manage` (`id`, `user_id`, `date`, `time_period`, `time`, `is_available`, `is_active`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 10, '2022-03-20', NULL, NULL, 1, 1, NULL, NULL, '2022-03-08 09:16:12', '2022-03-08 09:16:12'),
(2, 10, '2022-03-26', NULL, NULL, 0, 1, NULL, NULL, '2022-03-08 09:17:25', '2022-03-08 09:17:25'),
(3, 10, '2022-03-27', NULL, NULL, 1, 1, NULL, NULL, '2022-03-08 09:17:30', '2022-03-08 09:49:25'),
(4, 10, '2022-03-19', NULL, NULL, 0, 1, NULL, NULL, '2022-03-08 09:20:44', '2022-03-08 09:20:44'),
(5, 10, '2022-03-16', NULL, NULL, 1, 1, NULL, NULL, '2022-03-08 09:46:50', '2022-03-08 09:48:18'),
(6, 10, '2022-03-27', NULL, NULL, 0, 1, NULL, NULL, '2022-03-08 09:49:39', '2022-03-08 09:49:39'),
(7, 10, '2022-03-06', NULL, NULL, 1, 1, NULL, NULL, '2022-03-08 09:50:12', '2022-03-08 09:50:42'),
(8, 10, '2022-03-20', NULL, NULL, 0, 1, NULL, NULL, '2022-03-08 09:54:40', '2022-03-08 09:54:40'),
(9, 10, '2022-04-02', NULL, NULL, 0, 1, NULL, NULL, '2022-03-08 10:03:08', '2022-03-08 10:03:08'),
(10, 10, '2022-03-17', '13:30 PM - 14:00 PM', '13:30:00', 0, 1, NULL, NULL, '2022-03-09 05:37:43', '2022-03-09 05:37:43'),
(11, 10, '2022-03-18', '14:30 PM - 15:00 PM', '14:30:00', 0, 1, NULL, NULL, '2022-03-09 06:18:06', '2022-03-09 06:18:06'),
(12, 0, '2022-03-28', '', '00:00:00', 0, 1, NULL, NULL, '2022-03-24 11:25:06', '2022-03-24 11:25:06'),
(13, 0, '2022-03-28', '', '00:00:00', 0, 1, NULL, NULL, '2022-03-24 11:25:32', '2022-03-24 11:25:32'),
(14, 0, '2022-03-30', '', '00:00:00', 0, 1, NULL, NULL, '2022-03-24 11:28:23', '2022-03-24 11:28:23'),
(15, 0, '2022-03-30', '', '00:00:00', 0, 1, NULL, NULL, '2022-03-24 11:28:43', '2022-03-24 11:28:43'),
(16, 0, '2022-03-30', '', '00:00:00', 0, 1, NULL, NULL, '2022-03-24 11:28:46', '2022-03-24 11:28:46'),
(17, 0, '2022-03-30', '', '00:00:00', 0, 1, NULL, NULL, '2022-03-24 11:28:58', '2022-03-24 11:28:58'),
(18, 0, '2022-03-30', '09:30 AM - 10:00 AM', '09:30:00', 0, 1, NULL, NULL, '2022-03-24 11:29:20', '2022-03-24 11:29:20'),
(19, 0, '2022-03-25', '09:30 AM - 10:00 AM', '09:30:00', 0, 1, NULL, NULL, '2022-03-24 11:29:24', '2022-03-24 11:29:24'),
(20, 0, '2022-04-02', '09:30 AM - 10:00 AM', '09:30:00', 0, 1, NULL, NULL, '2022-03-24 11:29:28', '2022-03-24 11:29:28'),
(21, 10, '2022-03-31', '', '00:00:00', 0, 1, NULL, NULL, '2022-03-28 04:56:18', '2022-03-28 04:56:18'),
(22, 10, '2022-03-30', '18:00 PM - 18:30 PM', '18:00:00', 0, 1, NULL, NULL, '2022-03-28 05:02:26', '2022-03-28 05:02:26'),
(23, 10, '2022-04-01', '', '00:00:00', 1, 1, NULL, NULL, '2022-03-28 05:05:59', '2022-03-28 05:06:40'),
(24, 10, '2022-04-03', '', '00:00:00', 0, 1, NULL, NULL, '2022-03-30 05:54:14', '2022-03-30 05:54:14'),
(25, 10, '2022-04-09', '', '00:00:00', 0, 1, NULL, NULL, '2022-04-05 05:27:00', '2022-04-05 05:27:00');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `isactive` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `isactive`) VALUES
(1, 'Cardiologist ', 1),
(2, 'Dermatologist', 1),
(3, 'Ear Nose', 1),
(4, 'Veterinarian ', 1),
(5, 'Neurologist ', 1),
(6, 'Therapist', 1),
(7, 'Dentist', 1),
(8, 'Allergist', 1);

-- --------------------------------------------------------

--
-- Table structure for table `franchise`
--

CREATE TABLE `franchise` (
  `id` int(11) NOT NULL,
  `franchise_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL COMMENT '1=Active, 0=Inactive',
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` time NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `franchise`
--

INSERT INTO `franchise` (`id`, `franchise_name`, `address`, `contact`, `email`, `status`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Adarsh Parisar', 'Kamala nehru nagar, Pratap nagar, Jodhpur', '2654554', 'adarsh1@avm.com', 1, 1, '2022-01-28 14:15:11', '00:00:00'),
(2, 'jai narayan Parisar', 'Chandpol Choka, Inside Chandpol Gate, Jodhpur', '2653455', 'Jainarayan@avm.com', 1, 1, '2022-01-28 14:15:11', '00:00:00'),
(3, 'Shankar Parisar', 'Defence Road,bhati circle, Ratanada, Jodhpur', '2795641', 'sankar@avm.com', 1, 1, '2022-02-04 05:27:44', '00:00:00'),
(4, 'Ashok Parisar', 'Ashok nagar, Pal Road, Jodhpur', '2653664', 'ashok@avm.com', 0, 0, '2022-02-04 05:32:05', '00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `franchise_status`
--

CREATE TABLE `franchise_status` (
  `id` int(11) NOT NULL,
  `status_name` varchar(50) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `franchise_status`
--

INSERT INTO `franchise_status` (`id`, `status_name`, `is_active`) VALUES
(1, 'Active', 1),
(2, 'Inactive', 1),
(3, 'Archived', 0);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `location_name` varchar(100) NOT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `location_name`, `status`, `is_active`) VALUES
(1, 'ratanada, Jodhpur', 1, 1),
(2, 'Pal road, Jodhpur', 1, 1),
(3, 'Jalorigate, Jodhpur', 1, 1),
(4, 'Sursagar, Jodhpur', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `role_name`, `status`, `is_active`, `created_at`) VALUES
(1, 'Super', 1, 1, '2022-01-28 14:26:50'),
(2, 'Admin', 1, 1, '2022-01-28 14:26:50'),
(3, 'Doctor', 1, 1, '2022-01-28 14:26:50'),
(4, 'Staff', 1, 1, '2022-01-28 14:26:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `franchise_id` tinyint(4) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role_id`, `franchise_id`, `status`, `is_active`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'super', 'super@gmail.com', '123', 1, NULL, 1, 1, NULL, NULL, '2022-01-28 14:44:02', '2022-01-28 14:44:02'),
(2, 'Rounak', 'rs@gmail.com', '456', 2, 1, 1, 1, NULL, NULL, '2022-01-31 07:36:38', '2022-01-31 07:36:38'),
(4, 'mukesh', 'rajm@gmail.com', '123456', 3, 3, 1, 1, NULL, NULL, '2022-02-02 05:08:44', '2022-02-02 05:08:44'),
(5, 'rakesh', 'mathurakesh@gmail.com', '123', 3, 2, 1, 1, 1, 1, '2022-02-02 05:48:11', '2022-02-02 05:48:11'),
(6, 'mehul', 'mehvyas12@gmail.com', 'mehul123', 3, 3, 1, 1, 1, 1, '2022-02-02 05:53:28', '2022-02-02 05:53:28'),
(7, 'avneesh', 'boraavneesh@gmail.com', 'bora456', 3, 1, 1, 1, 1, 1, '2022-02-02 05:55:42', '2022-02-02 05:55:42'),
(8, 'saurav', 'saurav12@gmail.com', '987', 3, 3, 1, 1, 1, 1, '2022-02-02 05:57:49', '2022-02-02 05:57:49'),
(9, 'Mohit', 'mohit@gmail.com', 'mohit123', 3, 2, 1, 1, 1, 1, '2022-02-03 07:27:17', '2022-02-03 07:27:17'),
(10, 'Manish', 'manish@gmail.com', '1234', 3, 1, 1, 1, 2, 10, '2022-02-03 07:27:17', '2022-02-03 07:27:17'),
(11, 'Arvind', 'arvind@gmail.com', 'arvind', 3, 1, 1, 1, 2, NULL, '2022-02-10 07:50:51', '2022-02-10 07:50:51'),
(12, 'Manoj', 'manoj@gmail.com', 'manoj123', 3, 1, 1, 1, 2, NULL, '2022-02-10 11:42:41', '2022-02-10 11:42:41'),
(13, 'Mitanshu', 'mitanshu@gmail.com', '12345', 3, 2, 1, 1, 2, 13, '2022-02-11 07:28:46', '2022-02-11 07:28:46'),
(14, 'Yash', 'yd@gmail.com', '123456', 3, 3, 1, 1, 2, NULL, '2022-02-11 07:29:29', '2022-02-11 07:29:29'),
(15, 'Keshav', 'keshav@gmail.com', '123', 3, 3, 1, 1, 2, NULL, '2022-03-08 04:31:44', '2022-03-08 04:31:44'),
(16, 'Kishor', 'km@gmail.com', '456', 4, 1, 1, 1, 2, NULL, '2022-03-09 06:53:55', '2022-03-09 06:53:55'),
(17, 'Harish', 'hd@gmail.com', '456', 4, 2, 1, 1, 2, NULL, '2022-03-09 06:54:36', '2022-03-09 06:54:36'),
(18, 'Mayank', 'md@gmail.com', '123', 4, 2, 1, 1, 2, NULL, '2022-03-10 04:39:25', '2022-03-10 04:39:25'),
(19, 'Tarun', 'tg@gmail.com', '123', 4, 3, 1, 1, 2, NULL, '2022-03-10 04:44:29', '2022-03-10 04:44:29'),
(20, 'Ravindra ', 'rss@gmail.com', '123', 4, 1, 1, 1, 2, NULL, '2022-04-05 06:43:59', '2022-04-05 06:43:59'),
(21, 'kapil ', 'kc@gmail.com', '123', 3, 1, 1, 1, 2, NULL, '2022-04-07 10:36:13', '2022-04-07 10:36:13');

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE `user_profile` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_profile`
--

INSERT INTO `user_profile` (`id`, `user_id`, `first_name`, `last_name`, `phone`, `status`, `is_active`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 1, 'Super', 'Admin', '9584475645', 1, 1, 1, 1, '2022-01-28 14:53:09', '2022-01-28 14:53:09'),
(2, 2, 'Rounak', 'Soni', '9958847545', 1, 1, 2, 2, '2022-02-01 08:55:53', '2022-02-01 08:55:53'),
(4, 4, 'mukesh', 'rajpurohit', '9957745471', 1, 1, 2, 2, '2022-02-02 05:44:45', '2022-02-02 05:44:45'),
(6, 5, 'rakesh', NULL, '8854474562', 1, 1, 2, 2, '2022-02-02 05:48:11', '2022-02-02 05:48:11'),
(7, 6, 'mehul', 'vyas', '8854467958', 1, 1, 2, 2, '2022-02-02 05:53:28', '2022-02-02 05:53:28'),
(8, 7, 'avneesh', 'bora', '9857745624', 1, 1, 2, 2, '2022-02-02 05:55:42', '2022-02-02 05:55:42'),
(9, 8, 'saurav', 'dave', '9335465874', 1, 1, 2, 2, '2022-02-02 05:57:49', '2022-02-02 05:57:49'),
(11, 9, 'Mohit', 'bohra', '9574698745', 1, 1, 2, 2, '2022-02-03 07:27:17', '2022-02-03 07:27:17'),
(12, 10, 'Manish', 'Daga', '9658463214', 1, 1, 2, NULL, '2022-02-04 05:14:27', '2022-02-04 05:14:27'),
(13, 11, 'Arvind', 'mathur', '9965542154', 1, 1, 2, NULL, '2022-02-10 07:50:51', '2022-02-10 07:50:51'),
(14, 12, 'Manoj', 'Bohra', '9965584576', 1, 1, 2, NULL, '2022-02-10 11:42:41', '2022-02-10 11:42:41'),
(15, 13, 'Mitanshu', 'vyas', '9658457456', 1, 1, 2, NULL, '2022-02-11 07:28:46', '2022-02-11 07:28:46'),
(16, 14, 'Yash', 'Dave', '9632587412', 1, 1, 2, NULL, '2022-02-11 07:29:29', '2022-02-11 07:29:29'),
(17, 15, 'Keshav', 'vohra', '9876543121', 1, 1, 2, NULL, '2022-03-08 04:31:44', '2022-03-08 04:31:44'),
(18, 16, 'Kishor', 'Mathur', '9187645132', 1, 1, 2, NULL, '2022-03-09 06:53:55', '2022-03-09 06:53:55'),
(19, 17, 'Harish', 'Dave', '9843132113', 1, 1, 2, NULL, '2022-03-09 06:54:36', '2022-03-09 06:54:36'),
(20, 18, 'Mayank', 'Diwakar', '9875461321', 1, 1, 2, NULL, '2022-03-10 04:39:25', '2022-03-10 04:39:25'),
(21, 19, 'Tarun', 'Gehlot', '4462131123', 1, 1, 2, 2, '2022-03-10 04:44:29', '2022-03-10 04:44:29'),
(22, 20, 'Ravindra ', 'Sharma', '9146561321', 1, 1, 2, NULL, '2022-04-05 06:43:59', '2022-04-05 06:43:59'),
(23, 21, 'kapil ', 'Charan', '9876543112', 1, 1, 2, NULL, '2022-04-07 10:36:13', '2022-04-07 10:36:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appoinment_record`
--
ALTER TABLE `appoinment_record`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointed_client`
--
ALTER TABLE `appointed_client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointment_manage`
--
ALTER TABLE `appointment_manage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `franchise`
--
ALTER TABLE `franchise`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `franchise_status`
--
ALTER TABLE `franchise_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appoinment_record`
--
ALTER TABLE `appoinment_record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `appointed_client`
--
ALTER TABLE `appointed_client`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `appointment_manage`
--
ALTER TABLE `appointment_manage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `franchise`
--
ALTER TABLE `franchise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `franchise_status`
--
ALTER TABLE `franchise_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `user_profile`
--
ALTER TABLE `user_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
