<?php
/**
 * Leather Ledger Project
 * @author: Andrey Nedobylsky (admin@twister-vl.ru)
 */


require '../NodeRPC.php';
require '../EcmaSmartRPC.php';

$countractSource = <<<CONTRACT
    class TestContract extends Contract {

        init(){
            this.vars = new KeyValue('TestContract');
            super.init();
        }
        
        get contract(){
            return {"name":"TestContract"}
        }

        deploy() {
            console.log('DEPLOY');
            this.vars.put('t', 10);
        }

        call() {
            let t = Number(this.vars.get('t'));
            t++;
            console.log('CALLINGS', t);
            this.vars.put('t', t);
        }
        
        plus(a,b){
            console.log('PLUS',a,b);
            return Number(a)+Number(b);
        }
    }

    global.registerContract(TestContract);
CONTRACT;

$llNode = new EcmaSmartRPC('http://localhost:3015/');

$result = $llNode->ecmaDeployContract($countractSource)['result'];
$newAddress = $result['address'];


echo "Deployed contract address: " . $newAddress . "\n\n";

echo "Deployed contract info: " . print_r($llNode->ecmaGetContractProperty($newAddress, 'contract')['result'], true) . "\n\n";

echo "Deploy contract method 'call'\n";

$result = $llNode->ecmaDeployMethod($newAddress, 'call', [])['result'];

echo "New deploy block: ".$result['index']."\n";

echo "Call contract method without deploy plus(2,3): " . print_r($llNode->ecmaCallMethod($newAddress, 'plus', [2, 3])['result'], true) . "\n";
