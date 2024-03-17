<?
session_start();
$pdo = include_once "utils/db.php";

if (!empty ($_SESSION['favourite_posts'])) {
    $favourite_posts = $_SESSION['favourite_posts'];
} else if ($pdo) {
    $stmt = $pdo->prepare("SELECT  url FROM favourites");
    $stmt->execute();
    $favourite_posts = $stmt->fetchAll();
    if (!empty ($favourite_posts)) {
        $_SESSION['favourite_posts'] = $favourite_posts;
    }
}