<?php
/**
 * Leather Ledger Project
 * @author: Andrey Nedobylsky (admin@twister-vl.ru)
 */


require '../NodeRPC.php';

$llNode = new NodeRPC();

$wallet = $llNode->createWallet();

$llNode->changeWallet($wallet);

echo "New wallet address: " . $wallet['id'] . "\n";
echo "New tiny address: " . NodeRPC::getTinyAddress($wallet) . "\n";
echo "Current address: " . $llNode->getWallet() . "\n";
echo "\n";
echo "Info about master wallet: \n";

try {
    $masterWallet = $llNode->getWalletInfo('BL_1');
    echo "Full address: " . $masterWallet['id'] . "\n";
    echo "Balance: " . NodeRPC::mil2IZ($masterWallet['balance']) . "\n";
} catch (ReturnException $e) {
    echo "Address not found\n";
}

try {
    var_dump($llNode->createTransaction('7a6545dbbfff0f4d9723d6f83bee85dc8b93cb47a9d178cbea9157eaffda3c09', NodeRPC::IZ2Mil(1)));
} catch (ReturnException $e) {
    echo "Can't create transaction\n";
}
