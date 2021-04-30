function assetList() {
    const asset1 = parseInt(document.getElementById("asset1").value);
    const asset2 = parseInt(document.getElementById("asset2").value);
    const asset3 = parseInt(document.getElementById("asset3").value);
    const asset4 = parseInt(document.getElementById("asset4").value);
    const asset5 = parseInt(document.getElementById("asset5").value);

    document.getElementById("listAssetOne").innerHTML = "Precious Metals: $" + asset1;
    document.getElementById("listAssetTwo").innerHTML = "Cryptocurrency: $" + asset2;
    document.getElementById("listAssetThree").innerHTML = "Stocks: $" + asset3;
    document.getElementById("listAssetFour").innerHTML = "Real Estate: $" + asset4;
    document.getElementById("listAssetFive").innerHTML = "Other Assets: $" + asset5;
    document.getElementById("listAssetTotal").innerHTML = "Total Value of Assets: $" + (asset1 + asset2 + asset3 + asset4 + asset5);
}