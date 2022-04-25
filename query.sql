SELECT  `Sale`.`id`
       ,`Sale`.`title`
       ,`Sale`.`content`
       ,`Sale`.`price`
       ,`Sale`.`priceProposal`
       ,`Sale`.`chatCount`
       ,`Sale`.`favoriteCount`
       ,`Sale`.`viewCount`
       ,`Sale`.`state`
       ,`Sale`.`createdAt`
       ,`Sale`.`updatedAt`
       ,`Sale`.`writer`
       ,`Sale`.`categoryId`
       ,`User`.`id`                  AS `User.id`
       ,`User`.`email`               AS `User.email`
       ,`User`.`nick`                AS `User.nick`
       ,`User`.`password`            AS `User.password`
       ,`User`.`img`                 AS `User.img`
       ,`User`.`createdAt`           AS `User.createdAt`
       ,`User`.`updatedAt`           AS `User.updatedAt`
       ,`User`.`locationId`          AS `User.locationId`
       ,`User->Location`.`id`        AS `User.Location.id`
       ,`User->Location`.`sido`      AS `User.Location.sido`
       ,`User->Location`.`sigun`     AS `User.Location.sigun`
       ,`User->Location`.`dongmyeon` AS `User.Location.dongmyeon`
       ,`User->Location`.`li`        AS `User.Location.li`
       ,`Category`.`id`              AS `Category.id`
       ,`Category`.`name`            AS `Category.name`
       ,`Images`.`id`                AS `Images.id`
       ,`Images`.`path`              AS `Images.path`
       ,`Images`.`priority`          AS `Images.priority`
       ,`Images`.`saleId`            AS `Images.saleId`
FROM `sales` AS `Sale`
INNER JOIN `users` AS `User`
ON `Sale`.`writer` = `User`.`id` AND `User`.`locationId` = '30883'
INNER JOIN `locations` AS `User->Location`
ON `User`.`locationId` = `User->Location`.`id` AND `User->Location`.`id` = '30883'
LEFT OUTER JOIN `categories` AS `Category`
ON `Sale`.`categoryId` = `Category`.`id`
LEFT OUTER JOIN `images` AS `Images`
ON `Sale`.`id` = `Images`.`saleId`
WHERE `Sale`.`state` = '0'
ORDER BY `Sale`.`id` DESC;

SELECT  `Sale`.`id`
       ,`Sale`.`title`
       ,`Sale`.`content`
       ,`Sale`.`price`
       ,`Sale`.`priceProposal`
       ,`Sale`.`chatCount`
       ,`Sale`.`favoriteCount`
       ,`Sale`.`viewCount`
       ,`Sale`.`state`
       ,`Sale`.`createdAt`
       ,`Sale`.`updatedAt`
       ,`Sale`.`writer`
       ,`Sale`.`categoryId`
       ,`User`.`id`                  AS `User.id`
       ,`User`.`email`               AS `User.email`
       ,`User`.`nick`                AS `User.nick`
       ,`User`.`password`            AS `User.password`
       ,`User`.`img`                 AS `User.img`
       ,`User`.`createdAt`           AS `User.createdAt`
       ,`User`.`updatedAt`           AS `User.updatedAt`
       ,`User`.`locationId`          AS `User.locationId`
       ,`User->Location`.`id`        AS `User.Location.id`
       ,`User->Location`.`sido`      AS `User.Location.sido`
       ,`User->Location`.`sigun`     AS `User.Location.sigun`
       ,`User->Location`.`dongmyeon` AS `User.Location.dongmyeon`
       ,`User->Location`.`li`        AS `User.Location.li`
       ,`Category`.`id`              AS `Category.id`
       ,`Category`.`name`            AS `Category.name`
       ,`Images`.`id`                AS `Images.id`
       ,`Images`.`path`              AS `Images.path`
       ,`Images`.`priority`          AS `Images.priority`
       ,`Images`.`saleId`            AS `Images.saleId`
FROM `sales` AS `Sale`
INNER JOIN `users` AS `User`
ON `Sale`.`writer` = `User`.`id` AND `User`.`locationId` = '30810'
INNER JOIN `locations` AS `User->Location`
ON `User`.`locationId` = `User->Location`.`id` AND `User->Location`.`id` = '30810'
LEFT OUTER JOIN `categories` AS `Category`
ON `Sale`.`categoryId` = `Category`.`id`
LEFT OUTER JOIN `images` AS `Images`
ON `Sale`.`id` = `Images`.`saleId`
WHERE `Sale`.`state` = '0'
ORDER BY `Sale`.`id` DESC; 
