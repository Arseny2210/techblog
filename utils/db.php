<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=techblod', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("set names 'utf8'");
    return $pdo;
} catch (PDOException $err) {
    return false;
}
