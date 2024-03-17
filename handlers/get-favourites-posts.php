<?
$pdo = include_once "utils/db.php";

if ($pdo) {
    $stmt = $pdo->prepare("SELECT * FROM favourites");
    $stmt->execute();
    $favourite_posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
}