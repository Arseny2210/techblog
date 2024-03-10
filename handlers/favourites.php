<?php
// $db = include_once 'utils/db.php';
// debug(($_POST));
// $status = "OK";
$data = file_get_contents("php://input");
if ($data) {
    $data = json_decode($data, true);
    if ($data['param'] === 'addFavourite') {
        // addFavourite($data); 
    }
}
// if ($db == false) {
//     die('Ошибка подключения к базе данных');
// }

// if (isset($_GET['url']) and !empty($_GET['url']) and isset($_GET['category']) and !empty($_GET['category'])) {
//     $category = $_GET['category'];
//     $url = $_GET['url'];

//     $key = array_search($url, array_column($data[$category], 'url'));

//     if (!$key) {
//         die();
//     }

//     $post = $data[$category][$key];



//     function addFavourite(&$pdo, &$post)
//     {
//         $stmt = $pdo->prepare("INSERT INTO favourites (author, title, description, url, urlToImage, publishedAt, content) VALUES (:author, :title, :description, :url, :urlToImage, :publishedAt, :content)");
//         $stmt->execute([
//             'author' => $post['author'],
//             'title' => $post['title'],
//             'description' => $post['description'],
//             'url' => $post['url'],
//             'urlToImage' => $post['urlToImage'],
//             'publishedAt' => $post['publishedAt'],
//             'content' => $post['content'],
//         ]);
//         header('Location:' . $_SERVER['PHP_SELF']);
//     }
//     addFavourite($pdo, $post);

// }
?>